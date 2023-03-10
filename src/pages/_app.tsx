import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";
import Head from "next/head";

import { globalStyles } from "../styles/global";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>Ignite Shop</title>
        <meta property="og:title" content="Ignite Shop" key="title" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
