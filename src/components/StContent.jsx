import React, { useState } from 'react'
import styled from 'styled-components';

const StContent = ({ content }) => {
    const [limit, setLimit] = useState(5);
    const moreToggle = (str, limit) => {
        return {
            str: str.slice(0, limit),
            isShowMore: str.length > limit
        }
    };
    
    const onClickMore = (str) => {
        setLimit(str.length);
    };

    return (
        <div>
            {moreToggle(content, limit).str}
            {moreToggle(content, limit).isShowMore && <StMoreBtn onClick={()=>onClickMore(content)}>...더보기</StMoreBtn>}
        </div>
    );
}

export default StContent

const StMoreBtn = styled.span`
    cursor: pointer;
`