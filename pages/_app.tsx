import type { AppProps } from 'next/app'
import { Layout } from '../organism'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
