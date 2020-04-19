import Head from 'next/head';
// import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        />
        <title>Glorify</title>
      </Head>
      {/* <Navbar /> */}
      {children}
      <style jsx global>{`
        body {
          background-color: white;
        }
      `}</style>
    </div>
  );
};

export default Layout;
