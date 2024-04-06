import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type MenuProps = {
  isOpen: boolean
}

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    position: relative;

    div {
      display: flex;
      align-items: center;
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MenuFull = styled.nav<MenuProps>`
  ${({ isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
  `}
`
