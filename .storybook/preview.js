import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import Token from 'styles/theme'
import '../.jest/next-image.mock'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={Token}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]
