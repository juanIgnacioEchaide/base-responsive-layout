import Link from 'next/link'
import { FaBars, FaAngleDoubleLeft } from 'react-icons/fa'
import {
  BaseDrawerLink,
  BurgerContainer,
  CloseArrowContainer,
} from '../../atom'

const DrawerLink = ({ href, as, setOpen, open, text, icon }: any) => {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      href={href}
      as={as}
      onClick={() => setOpen(!open)}
    >
      <>
        {icon}
        <BaseDrawerLink>{text}</BaseDrawerLink>
      </>
    </Link>
  )
}

const Burger = ({ setOpen, open }: any) => {
  return (
    <BurgerContainer>
      <FaBars onClick={() => setOpen(!open)} size="20" />
    </BurgerContainer>
  )
}

const CloseArrow = ({ setOpen, open }: any) => {
  return (
    <CloseArrowContainer>
      <FaAngleDoubleLeft onClick={() => setOpen(!open)} size="30" />
    </CloseArrowContainer>
  )
}
export { DrawerLink, Burger, CloseArrow }
