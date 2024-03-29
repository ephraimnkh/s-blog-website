import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from "next/app";
import Script from 'next/script';
import dynamic from "next/dynamic";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      />
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
