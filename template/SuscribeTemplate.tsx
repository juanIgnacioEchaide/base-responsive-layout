import { BasePageTemplate } from './BasePageTemplate'

const SuscribeContent = (): JSX.Element => {
  return <p>suscri</p>
}

const SuscribeTemplate = (): JSX.Element => {
  return <BasePageTemplate title="Artículos" content={<SuscribeContent />} />
}

export { SuscribeTemplate }
