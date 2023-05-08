import "../styles/globals.css";
import "../styles/all.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
