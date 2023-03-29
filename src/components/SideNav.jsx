import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/img/instagram.png'
import Menu from './Menu'

const SideNav = () => {

    return (
        <SideNavContainer>
            <Logo>
                <img src={logo} alt='Instagram' width='120' height='60' />
            </Logo>

            <Menu />

        </SideNavContainer>
    )
}

export default SideNav

const SideNavContainer = styled.nav`
    display: flex;
    flex-direction: column;
`

const Logo = styled.div`
    display: flex;
    padding: 20px;
`