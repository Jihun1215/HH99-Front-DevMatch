import React from 'react'
import styled from 'styled-components';
import Btn from './Button';
import { FaPlus } from "react-icons/fa";

function Sidebar({ children }) {
    return (
        <SideLayout>
            <SideBar>
                {children}
            </SideBar>
        </SideLayout>
    )
}

export default Sidebar


const SideLayout = styled.div`
    position: absolute;
`

const SideBar = styled.div`
    position: fixed;
    left: 20rem;
    top: 20rem;
    background: white;
    width: 4.6875rem;
    height: 10.9375rem;
    background: #5C7CFA;
    border-radius: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap :.625rem 0;
    z-index: 10;
`;