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
                    <img src={logo} alt='User' width='120' height='60' onClick={()=>window.location.replace('/main')}/>
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
    justify-content: space-between;
`

const Logo = styled.div`
    display: flex;
`

