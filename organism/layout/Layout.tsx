import { useState } from 'react'
import { TopBanner } from '../../atom/drawer/TopBanner'
import {
  LayoutBlur,
  LayoutContainer,
  PageContentContainer,
} from '../../atom/layout/Layout'
import { useMedia } from '../../hooks/UseMedia'
import { DrawerMenu } from '../drawer/DrawerMenu'

type LayoutProps = {
  open: boolean
}

const Layout = ({ children }: any) => {
  const [open, setOpen] = useState<boolean>(false)
  const viewport = useMedia()

  return (
    <LayoutContainer>
      {open && <LayoutBlur />}
      <DrawerMenu open={open} setOpen={setOpen} viewport={viewport} />
      <TopBanner open={open} setOpen={setOpen} />
      <PageContentContainer>{children}</PageContentContainer>
    </LayoutContainer>
  )
}
export { Layout }
