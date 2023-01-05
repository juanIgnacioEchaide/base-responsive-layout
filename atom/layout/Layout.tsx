import styled from 'styled-components'

const LayoutContainer = styled.div`
  display: flex;
  z-index: 0;
  justify-content: center;
  flex-direction: column;
  place-items: center;
  top: 0;
  left: 0;
  overflow: hidden;
`
const LayoutBlur = styled.div`
  display: flex;
  z-index: 45;
  justify-content: center;
  flex-direction: column;
  place-items: center;  
  height: 197vh;
  width: 100vw;
  position: absolute;
  overflow: hidden;
  overflow: hidden;
  background-color: black;
  opacity: 0.8;
`

const PageContentContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: green;
  position: absolute;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 100px;
  top: 0;
  left: 0;
`

export { LayoutContainer, LayoutBlur, PageContentContainer }
