import React from 'react';
import Layout from '../Components/Layout';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Details from '../Detail/Details';

function Detail() {
    return (
        <Layout>
            <Header />

            <Details />
            <Footer />
        </Layout>
    );
}

export default Detail;
