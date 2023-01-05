import Head from 'next/head'
import { ContentContainer } from '../organism/base-page/Content'
import { LinkRels } from '../organism/base-page/Link'
import { Meta } from '../organism/base-page/Meta'

const BasePageTemplate = ({ title, meta, link, content }: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <Meta meta={meta} />
        <LinkRels link={link} />
      </Head>
      {content}
    </>
  )
}

export { BasePageTemplate }
