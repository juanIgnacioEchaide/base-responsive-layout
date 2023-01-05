import Link from 'next/link'
import { DrawerContainer } from '../../atom/drawer/Drawer'
import { CloseArrow, DrawerLink } from '../../molecule/drawer/Drawer'

const DrawerMenu = ({ setOpen, open, viewport }: any) => {
  return (
    <DrawerContainer open={open} setOpen={setOpen} viewport={viewport}>
      <CloseArrow open={open} setOpen={setOpen} />
      <div style={{ paddingLeft: '7vw', justifyContent: 'space-between' }}>
        <DrawerLink
          as="photo"
          href="/photo"
          setOpen={setOpen}
          open={open}
          text="Fotografía"
        />
        <DrawerLink
          as="articles"
          href="/articles"
          setOpen={setOpen}
          open={open}
          text="Artículos "
        />
        <DrawerLink
          as="motivational"
          href="/motivational"
          setOpen={setOpen}
          open={open}
          text="Motivacionales"
        />
        <DrawerLink
          as="suscribe"
          href="/suscribe"
          setOpen={setOpen}
          open={open}
          text="Suscribirse"
        />
      </div>
    </DrawerContainer>
  )
}

export { DrawerMenu }
