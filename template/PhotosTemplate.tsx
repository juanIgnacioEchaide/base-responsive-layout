import { BasePageTemplate } from './BasePageTemplate'

const PhotosContent = (): JSX.Element => {
  return <p>photo</p>
}

const PhotosTemplate = (): JSX.Element => {
  return <BasePageTemplate title="Artículos" content={<PhotosContent />} />
}

export { PhotosTemplate }
