import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <LayoutSize>

            <LayourArea>
                <Header />
                {children}
                <Footer />
            </LayourArea>

        </LayoutSize>
    )
}

export default Layout


const LayoutSize = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LayourArea = styled.div`
    width: 81.25rem;
    height: 52rem;
    background: #EDF2FF;
    border-radius: 1.25rem;
`