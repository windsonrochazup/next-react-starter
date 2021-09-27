import { generateMedia } from 'styled-media-query'

const breakpoints = {
  xsmall: '320px',
  small: '360px',
  medium: '768px',
  large: '1024px',
  xlarge: '1440px',
  xxlarge: '1920px',
} as const

export const media = generateMedia(breakpoints)

export const pxToRem = (value: string) => {
  const base = 10
  const px = parseInt(value.replace('px', ''), 10)
  const convertedPx = parseFloat((px / base).toPrecision(4))
  return `${convertedPx}rem`
}
