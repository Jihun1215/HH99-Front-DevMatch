import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCloudSunRain } from "react-icons/fa";

function Header() {
    return (
        <HeaderSize>
            <HeaderNavbar>
                {/* 이미지 들어갈 자리입니다 */}
                <Link to="/"><div>Logo</div></Link>
                <ul>

                    <NavLink
                        to="/"> <li>Home</li>
                    </NavLink>
                    <NavLink
                        to="/mypage">
                        <li>Mypage</li>
                    </NavLink>
                    <NavLink
                        to="/login">
                        <li>LogIn</li>
                    </NavLink>

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

const NavLink = styled(Link)`
      text-decoration: none;
       color: #000;
      text-transform: uppercase;
      font-weight: 700;
      border-bottom: 1px solid black;
      box-shadow:rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px
`