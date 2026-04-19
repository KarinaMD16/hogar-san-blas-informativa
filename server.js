import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createProxyMiddleware } from 'express-http-proxy';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to set cache headers
app.use((req, res, next) => {
  // Assets with hash (1 year cache)
  if (req.path.match(/^\/assets\/.*\.(js|css|woff|woff2|ttf|eot|otf)$/)) {
    res.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Images (30 days cache)
  else if (req.path.match(/\.(webp|jpg|jpeg|png|gif|ico|svg)$/)) {
    res.set('Cache-Control', 'public, max-age=2592000');
  }
  // HTML, JSON, XML (1 hour cache)
  else if (req.path.match(/\.(html?|json|xml|sitemap)$/)) {
    res.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  }
  // Default
  else {
    res.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  }
  next();
});

// Proxy API requests to NestJS backend
app.use('/api', createProxyMiddleware({
  target: process.env.API_URL || 'https://api.sidnam.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
}));

// Serve static files from dist
app.use(express.static(join(__dirname, 'dist')));

// SPA fallback: serve index.html for all non-file requests
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API proxying to: ${process.env.API_URL || 'https://api.sidnam.com'}`);
});
