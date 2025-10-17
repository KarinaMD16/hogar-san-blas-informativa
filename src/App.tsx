
import { Toaster } from "sonner";
import type { ReactNode } from 'react';

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <>
      {children}
      <Toaster position="top-center" richColors closeButton />
    </>
  )
}

export default App
