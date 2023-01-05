import { ThemeProvider } from 'styled-components'

const ThemeWrapper = ({ children, theme }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export { ThemeWrapper }
