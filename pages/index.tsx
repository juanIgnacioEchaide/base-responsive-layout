import { Inter } from '@next/font/google'
import { BasePageTemplate } from '../template/BasePageTemplate'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <BasePageTemplate  title={"Home"} content={<p>Home</p>}/>
}
