import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description">
          Front end developer Murat Erkal&apos;s portfolio website.
        </meta>
        <title>Murat Erkal | Front End Developer</title>
      </Head>
      <AnimatePresence mode="wait">
        <motion.div
          key={1}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="w-full min-h-screen overflow-x-hidden"
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
