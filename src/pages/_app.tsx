import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import Token from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Token}>
      <GlobalStyles />
      <Head>
        <title>Wave - Customer</title>
        <meta name='description' content='The best Customer manager for you!' />
      </Head>
      <DefaultSeo />
      <NextNprogress
        color={Token.color.primary.main}
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
