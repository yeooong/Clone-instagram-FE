import React, { useState } from 'react'
import styled from 'styled-components';

const Menu = () => {
    const [view, setVeiw] = useState(false);
    return (
        <StulButton >
            <span onClick={() => { setVeiw(!view) }}>더보기</span>
            <div>
                {view && <StList>로그아웃</StList>}
            </div>
        </StulButton>

    )
}

export default Menu

const StulButton = styled.div`
    && :hover{
        cursor: pointer;
        display: inline-block;
        border: none;
        border-radius: 10px;
        background-color: #d9d9d99b;
    }   
`

const StList = styled.li`
    list-style: none;
`