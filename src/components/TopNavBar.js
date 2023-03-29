import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ReactJs } from '../assets/img/ReactJs.svg'
import { ReactComponent as Node } from '../assets/img/Node.svg'

const TopNavBar = () => {

  return (
    <StTopNav>
          <StIconBox>
              <StBorder>
                  <ReactJs />
              </StBorder>
              <StBorder>
                  <ReactJs />
              </StBorder>
              <StBorder>
                  <ReactJs />
              </StBorder>
              <StBorder>
                  <ReactJs />
              </StBorder>
              <StBorder>
                  <Node />
              </StBorder>
              <StBorder>
                  <Node />
              </StBorder>
              <StBorder>
                  <Node />
              </StBorder>
              <StBorder>
                  <Node />
              </StBorder>
          </StIconBox>
          <StStackBox>
            <StStackName>React</StStackName>
            <StStackName>React</StStackName>
            <StStackName>React</StStackName>
            <StStackName>React</StStackName>
            <StStackName>Node</StStackName>
            <StStackName>Node</StStackName>
            <StStackName>Node</StStackName>
            <StStackName>Node</StStackName>
          </StStackBox>
    </StTopNav>
  )
}

export default TopNavBar

const StTopNav = styled.div`
    padding-top: 30px;
    margin-left: 300px;
    height: 120px;
    /* border: 1px solid orange; */
    display: flex;
    flex-direction: column;
`

const StIconBox = styled.div`
    height: 100px;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const StBorder = styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid transparent;
    border-radius: 50%;
    background-image: linear-gradient(to right bottom, yellow, orange, red, DarkViolet, DarkOrchid);
    display: flex;
    justify-content: center;
    align-items: center;
`

const StStackBox = styled.div`
    height: 80px;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const StStackName = styled.div`
    /* border: 1px solid violet; */
    width: 60px;
    display: flex;
    justify-content: center;

`