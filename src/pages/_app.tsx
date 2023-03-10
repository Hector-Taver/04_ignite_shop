import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

import { globalStyles } from "../styles/global";
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>Ignite Shop</title>
        <meta property="og:title" content="Ignite Shop" key="title" />
      </Head>

      <Header>
        <Image src={logoImg} alt=""/>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
