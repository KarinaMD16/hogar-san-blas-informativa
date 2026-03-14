
import { Toaster } from "sonner";
import type { ReactNode } from 'react';
import WhatsappCTA from "./components/WhatsappCTA";

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <>
      {children}
      <WhatsappCTA />
      <Toaster position="top-center" richColors closeButton />
    </>
  )
}

export default App
