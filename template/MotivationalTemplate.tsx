import { BasePageTemplate } from './BasePageTemplate'

const MotivationalContent = (): JSX.Element => {
  return <p>meme</p>
}

const MotivationalTemplate = (): JSX.Element => {
  return <BasePageTemplate title="Artículos" content={<MotivationalContent />} />
}

export { MotivationalTemplate }
