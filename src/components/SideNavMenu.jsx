import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from 'src/hooks/Cookie';
import styled from 'styled-components';

const SideNavMenu = () => {
    const [view, setVeiw] = useState(false);
    const navigate = useNavigate();

    const onClickLogout = () => {
        deleteCookie('token');
        alert('로그인이 필요한 기능입니다.')
        navigate('/');
    }

    return (
        <StMoreDivWrap >
            <StMoreDiv onClick={() => { setVeiw(!view) }}>더 보기</StMoreDiv>
            <div>
                {view && <StMenu onClick={onClickLogout} >로그아웃</StMenu>}
            </div>
        </StMoreDivWrap>

    )
}

export default SideNavMenu

const StMoreDivWrap = styled.div`
    font-size: 20px;
    width: 250px;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    cursor: pointer;
    && :hover{
    border: none;
    border-radius: 10px;
    background-color: #d9d9d955;
    }  
`

const StMoreDiv = styled.div`
 
`

const StMenu = styled.div`
    display: flex;
    border: 1px solid #b3b1b198;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px;
    cursor: pointer;
    && :hover{

        border: none;
        border-radius: 10px;
        background-color: white;
    }   
`