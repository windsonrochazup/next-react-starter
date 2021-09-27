import styled, { css } from 'styled-components'
import { media } from 'styles/media'

import token from 'styles/theme'

export const Wrapper = styled.div`
  width: 100%;
  min-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const HelloContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    column-gap: ${theme.spacing.medium};
    grid-template-columns: repeat(2, 1fr);

    ${media.lessThan('small')`
      grid-template-columns: 1fr;
    `}
  `}
`

export const ListContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(36rem, 36rem));
    row-gap: ${theme.spacing.huge};
    column-gap: ${theme.spacing.large};

    ${media.lessThan('xxlarge')`
      column-gap: ${theme.spacing.large};
      row-gap: ${theme.spacing.huge};
      grid-template-columns: repeat(4, 1fr);
    `}

    ${media.lessThan('xlarge')`
      column-gap: ${theme.spacing.medium};
      row-gap: ${theme.spacing.huge};
      grid-template-columns: repeat(3, 1fr);
    `}

    ${media.lessThan('large')`
      column-gap: ${theme.spacing.medium};
      row-gap: ${theme.spacing.huge};
      grid-template-columns: repeat(2, 1fr);
    `}

    ${media.lessThan('medium')`
      column-gap: ${theme.spacing.medium};
      row-gap: ${theme.spacing.huge};
      grid-template-columns: repeat(2, 1fr);
    `}

    ${media.lessThan('small')`
      column-gap: ${theme.spacing.medium};
      row-gap: ${theme.spacing.large};
      grid-template-columns: repeat(1, 1fr);
    `}
  `}
`

export const SearchBox = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;

    ${media.lessThan('small')`
    margin: 2.4rem 0;
      flex-direction: column;
    `}

    .info {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .notification {
        margin-left: ${theme.spacing.small};
      }

      ${media.lessThan('small')`
        margin-top: ${theme.spacing.medium};
        width: 100%;
        justify-content: center;
      `}
    }
  `}
`

export const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardItemContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardItemContentHeader = styled(CardItemContent)`
  align-items: start;

  img {
    cursor: pointer;
  }
`

export const Description = {
  marginTop: `${media.lessThan('small') ? token.spacing.small : token.spacing.medium}`,
  marginBottom: `${media.lessThan('small') ? token.spacing.medium : token.spacing.large}`,
  width: '100%',
  whiteSpace: 'pre-line',
} as never

export const Button = {
  width: '100%',
  backgroundColor: `${token.color.secondary.main}`,
  ':hover': { backgroundColor: `${token.color.secondary.dark1}` },
} as never

export const CardContentText = {
  padding: `${token.spacing.medium} 0 ${token.spacing.large} 0`,
  width: '100%',
  whiteSpace: 'wrap',
  textOverflow: 'ellipsis',
} as never
