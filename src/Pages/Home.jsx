import React from 'react'
import Layout from '../Components/Layout'
import styled from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Btn from '../Components/Button'



function Home() {
    return (
        <Layout>

            <Header />
            <Btn>ddd</Btn>
            <Btn sm>ddd</Btn>
            <Btn me>ddd</Btn>
            <Btn lg>ddd</Btn>
            <Btn sideBtn>버튼</Btn>
            <Footer />
            
        </Layout>
    )
}

export default Home





