import styled from 'styled-components'

const FullScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 24vh;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  background: yellow;
`
const HalfScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  background: yellow;
`
const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100vw;
  background: pink;
`

export { FullScrollBox, HalfScrollBox, ArticleBox }
