import Head from "next/head";
import Header from "../sections/Header";

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
      </Head>

      <Header />

      <main>{children}</main>
    </>
  );
};

export default Layout;
