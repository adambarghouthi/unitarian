import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
