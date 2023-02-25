import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'



function Header() {

    const navigate = useNavigate()
    const GoToHome = () => { navigate('/') }
    const MoveToSignup = () => { navigate('/signup') }

    return (
        <HeaderSize>
            <HeaderNavbar>
                {/* 이미지 들어갈 자리입니다 */}
                <div onClick={GoToHome}>Logo</div>
                <ul>
                    <li>Home</li>
                    <li>Mypage</li>
                    <li onClick={MoveToSignup}>LogIn</li>
                </ul>
            </HeaderNavbar>
        </HeaderSize >
    )
}
export default Header
const HeaderSize = styled.div`
    width: 50rem;
    height: 3.8125rem;
    border-bottom-left-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    box-shadow: rgba(0, 0, 0, 0.15) 3.95px 3.95px 8.6px;
    margin: 0 auto;
    color: #000;
    font-family: 800;
    background: transparent;
`;
const HeaderNavbar = styled.div`
    width: 85%;
    height: 100%;
    margin: auto;
    padding: 1.875rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
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