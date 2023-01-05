import { ArticleBox, FullScrollBox } from '../atom'
import { BasePageTemplate } from './BasePageTemplate'

const ArticlesContent = (): JSX.Element => {
  return (
    <FullScrollBox>
      <ArticleBox>photo</ArticleBox>
      <ArticleBox>photo</ArticleBox>
      <ArticleBox>photo</ArticleBox>
      <ArticleBox>photo</ArticleBox>
      <ArticleBox>photo</ArticleBox>
      <ArticleBox>photo</ArticleBox>
      <ArticleBox>photo</ArticleBox>
      <ArticleBox>photo</ArticleBox>
    </FullScrollBox>
  )
}

const ArticlesTemplate = (): JSX.Element  => {
  return <BasePageTemplate title="Artículos" content={<ArticlesContent />} />
}

export { ArticlesTemplate }
