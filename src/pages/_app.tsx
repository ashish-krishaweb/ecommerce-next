import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()


  return (
    <SessionProvider session={session}>
      {/* <div>
        <div  onClick={()=> router.push('/', undefined, { shallow: true })}>home</div>

        <div  onClick={()=> router.push('/login', undefined, { shallow: true })}>login</div>
      </div> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}
