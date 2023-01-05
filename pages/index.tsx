import { Inter } from '@next/font/google'
import { BasePageTemplate } from '../template/BasePageTemplate'
import { PageTitle } from '../utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <BasePageTemplate title={PageTitle.Index} content={<p>hola</p>} />
}
