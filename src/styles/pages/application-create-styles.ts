import styled from 'styled-components'
import token from 'styles/theme'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 75.2rem;
`

export const Description = {
  paddingTop: `${token.spacing.medium}`,
  width: '100%',
  whiteSpace: 'pre-line',
} as never
