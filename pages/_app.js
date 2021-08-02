import React from 'react'
import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import { prismLightTheme, prismDarkTheme } from '../styles/prism'
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo'

import NProgress from "nprogress";
import { useEffect } from "react";
import Router from "next/router";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90CDF4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const delay = 500; // in milliseconds
    let timer;
    const load = () => {
      timer = setTimeout(function () {
        NProgress.start();
      }, delay);
    };
    const stop = () => {
      clearTimeout(timer);
      NProgress.done();
    };
    Router.events.on("routeChangeStart", () => load());
    Router.events.on("routeChangeComplete", () => stop());
    Router.events.on("routeChangeError", () => stop());
  }, []);
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <GlobalStyle>
        <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp

