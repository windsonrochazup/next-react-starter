import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import Token from '../styles/theme'

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: Omit<RenderOptions, 'queries'> = {}
) => render(<ThemeProvider theme={Token}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
