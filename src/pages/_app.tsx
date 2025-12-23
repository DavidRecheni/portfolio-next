import "../styles/globals.css";

import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
      storageKey="theme"
    >
      <AnimatePresence mode="wait">
        <motion.div className="font-['Open\\Sans]">
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
