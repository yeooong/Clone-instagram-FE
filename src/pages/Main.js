import React from "react"
import Posts from "src/components/Posts"
import SideNav from "src/components/SideNav"
import TopNavBar from "src/components/TopNavBar"
import styled from "styled-components"


const Main = () => {

  return (
    <MainWrap>
      <StSideNav>
        <SideNav />
      </StSideNav>
      <section>
        <TopNavBar />
        <Posts />
      </section>
    </MainWrap>
  )
}

export default Main

const StSideNav = styled.div`
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
