import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex flex-col items-center selection:text-zinc-100 bg-zinc-900 selection:bg-zinc-600 selection:bg-opacity-25 selection:backdrop-blur-sm overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
