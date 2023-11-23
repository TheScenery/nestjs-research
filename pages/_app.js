import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log("APP render");
  return <Component {...pageProps} />;
}
