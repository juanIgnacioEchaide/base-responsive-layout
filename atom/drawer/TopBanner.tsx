import { TopBannerContainer } from './Drawer'
import { Burger } from '../../molecule/drawer/Drawer'

const TopBanner = ({ setOpen, open }: any) => {
  return (
    <TopBannerContainer>
      <Burger setOpen={setOpen} open={open} />
    </TopBannerContainer>
  )
}

export { TopBanner }
