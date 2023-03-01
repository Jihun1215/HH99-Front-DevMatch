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
     width: 100vw;
     height: 100vh;
    background: #EDF2FF;
    border-radius: 1.25rem;
`