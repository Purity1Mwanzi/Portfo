import { LogRocket } from "@/components";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Purity mwanzi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Purity Mwanzi"></meta>
        <meta
          name="description"
          content="Purity Mwanzi is a frontend developer who loves to work on the web."
        ></meta>
        <meta name="theme-color" content="#794856"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <LogRocket />
      <Analytics />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
