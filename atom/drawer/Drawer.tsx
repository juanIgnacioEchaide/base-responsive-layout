import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type DrawerProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
const DrawerContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 30vw;
  z-index: 50;
  background: black;
  color: white;
  transform: ${({ open }: DrawerProps) =>
    open ? 'translateX(0)' : 'translateX(-100%)'};
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`
const DrawerBlur = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0.9;
  top: 0;
`

const TopBannerContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 10vh;
  z-index: 40;
  justify-content: left;
  align-items: space-around;
  top: 0;
  background: red;
  color: white;
`
export { DrawerContainer, TopBannerContainer, DrawerBlur }
