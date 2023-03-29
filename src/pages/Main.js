import React from "react"
import Posts from "src/components/Posts"
import SideNav from "src/components/SideNav"
import styled from "styled-components"


const Main = () => {

  return (
    <MainWrap>
      <StHeader>
        <SideNav />
      </StHeader>

      <section>
        <Posts />
      </section>
    </MainWrap>
  )
}

export default Main

const StHeader = styled.div`
  height: 100%;
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 2px solid gray;
`

const MainWrap = styled.div`
  display: flex;
  flex-direction: row;
`