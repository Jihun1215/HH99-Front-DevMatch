import React from 'react'
import Layout from '../Components/Layout'
import styled from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Btn from '../Components/Button'
import Sidebar from '../Components/Sidebar'



function Home() {
    return (
        <Layout>

            <Header />
            <Sidebar>
                {/* <Btn sideBtn>버튼</Btn> */}
            </Sidebar>
            {/* <Btn>ddd</Btn>
            <Btn sm>ddd</Btn>
            <Btn me>ddd</Btn>
            <Btn lg>ddd</Btn> */}

            <Footer />

        </Layout>
    )
}

export default Home





