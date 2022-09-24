import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Gemeente Hoorn</title>
        <meta
          name='description'
          content='Concept Website voor Gemeente Hoorn'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/logo-hoorn.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
