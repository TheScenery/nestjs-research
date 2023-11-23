import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("Document render");
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
