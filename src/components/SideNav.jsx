import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/img/instagram.png'
import SideNavMenu from './SideNavMenu'


const SideNav = () => {
    const navigate = useNavigate();

    return (
        <>
            <SideNavContainer>
                <Logo>
                    <LogoImg src={logo} alt='User' onClick={()=>window.location.replace('/main')}/>
                </Logo>
                <SideNavMenu />
            </SideNavContainer>
        </>

    )
}

export default SideNav

const SideNavContainer = styled.nav`
    height: 90%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    
`

const Logo = styled.div`
    display: flex;
`
const LogoImg = styled.img`
    width: 120px;
    height: 60px;
`
