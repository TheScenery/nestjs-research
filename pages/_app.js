import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  console.log(router.pathname);

  if (typeof window !== "undefined" && router.pathname === "/") {
    router.push("/ssr");
    return null;
  }

  console.log("APP render");
  return <Component {...pageProps} />;
}
