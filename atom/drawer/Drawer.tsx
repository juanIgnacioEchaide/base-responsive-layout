import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { Viewport } from '../../utils'

type DrawerProps = {
  open: boolean
  setOpen?: Dispatch<SetStateAction<boolean>>
  viewport: Viewport
}

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  height: 100vh;
  width: ${({viewport}:DrawerProps) => {
    return viewport === Viewport.Desktop ? '25vw' :'50vw'
  }};
  z-index: 50;
  background: grey;
  text-align: right;
  color: white;
  transform: ${({ open }: DrawerProps) =>
    open ? 'translateX(0)' : 'translateX(-100%)'};
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`
const TopBannerContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 10vh;
  z-index: 40;
  justify-content: center;
  align-items: center;
  top: 0;
  background: red;
  color: white;
`
const BaseDrawerLink = styled.p`
  font-family: ${theme.fonts.primaryFamily};
  text-decoration: none;
  display: flex;
  place-items: center;
  padding: 3.5vh;
  color: ${theme.colors.primaryText};
`

const DrawerLinksContainer = styled.p`
  padding-left: 7vw;
  justify-content: space-between;
`
const BurgerContainer = styled.div`
  padding-top: 20px;
  padding-left: 15px;
  user-select: none;
`

const CloseArrowContainer = styled.div`
  padding-top: 20px;
  padding-right: 5vw;
`

export {
  DrawerContainer,
  TopBannerContainer,
  BaseDrawerLink,
  DrawerLinksContainer,
  BurgerContainer,
  CloseArrowContainer,
}
