import { useState } from 'react'
import styled from 'styled-components'
import {
  DrawerBlur,
  DrawerContainer,
  TopBannerContainer,
} from '../../atom/drawer/Drawer'

type LayoutProps = {}

const LayoutContainer = styled.div`
  display: flex;
  z-index: 0;
  justify-content: center;
  flex-direction: column;
  place-items: center;
  top: 0;
  left: 0;
  overflow: hidden;
`

const AppWrapper = styled.div`
  z-index: 0;
  overflow: hidden;
`

const Layout = ({ children }: any) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <LayoutContainer>
      <DrawerContainer open={open} setOpen={setOpen}>
        <button onClick={() => setOpen(!open)}>cerrar</button>
      </DrawerContainer>
      <TopBannerContainer>
        <button onClick={() => setOpen(!open)}>abrir</button>
      </TopBannerContainer>
      {children}
    </LayoutContainer>
  )
}
export { Layout }
