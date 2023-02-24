import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderSize>
            <HeaderNavbar>
                {/* 이미지 들어갈 자리입니다 */}
                <div>Logo</div>

                <ul>
                    <li>Home</li>
                    <li>Mypage</li>
                    <li>LogIn</li>

                </ul>
            </HeaderNavbar>
        </HeaderSize >
    )
}

export default Header

const HeaderSize = styled.div`
    width: 50rem;
    height: 5.625rem;
    border-bottom-left-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    box-shadow: rgba(50,50,93,0.23 ) 0 30px 30px -20px;
    margin: 0 auto;
    /* background: #EDF2FF; */
`;
const HeaderNavbar = styled.div`
    width: 85%;
    height: 100%;
    margin: auto;
    padding: 1.875rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    > div {
        width: 7.5rem;
        cursor: pointer;
    }
    > ul {
        list-style: none;
        display: flex;
        gap: 1.875rem;
        position: relative;
        
    };
   
    > li {
        border-radius: 20px;
        list-style: none;
        text-decoration: none;
        color: black;
        position: relative;
    };
    > a {
        text-decoration: none;
        color: #000;
        text-transform: uppercase; 
      
    }
`

