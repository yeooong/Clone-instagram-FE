import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from 'src/hooks/Cookie';
import styled, { ServerStyleSheet } from 'styled-components';
import home from '../assets/img/home.png'
import create from '../assets/img/create.png'
import Modal from './Modal';
import ModalPortal from './ModalPortal';

const SideNavMenu = () => {
    const [view, setVeiw] = useState(false);
    const navigate = useNavigate();

    const onClickLogout = () => {
        deleteCookie('token');
        alert('로그인이 필요한 기능입니다.')
        navigate('/');
    }

    const [modal, setModal] = useState({
        type: '',
        isExist: false,   
    })

    const modalHandler = type => {
        setModal({ type, isExist: !modal.isExist });
      };

    return (
        <StMoreDivWrap >
            <StPushButton onClick={()=>window.location.replace('/main')}>
                <StHomeButton src={home} />
                <span>홈</span>
            </StPushButton>
            <StPushButton onClick={() => modalHandler('create')}>
                <StCreateButton src={create} />
                <span>작성하기</span>
            </StPushButton>
            <StMoreDiv onClick={() => { setVeiw(!view) }}>더 보기</StMoreDiv>
            <div>
                {view && <StMenu onClick={onClickLogout} >로그아웃</StMenu>}
            </div>
            <ModalPortal>
        {modal.isExist && (
          <Modal
            onCloseHandler={modalHandler}
            type={modal.type}
          />
        )}
      </ModalPortal>
        </StMoreDivWrap>
        

    )
}

export default SideNavMenu

const StMoreDivWrap = styled.div`
    margin-top: 80px;
`

const StMoreDiv = styled.div`
    margin-top: 380px;
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

const StPushButton = styled.div`
    height: 80px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    font-size: 25px;
    cursor: pointer;
`

const StHomeButton = styled.img`
    width: 30px;
    height: 30px;
`
const StCreateButton = styled.img`
    width: 30px;
    height: 30px;
`