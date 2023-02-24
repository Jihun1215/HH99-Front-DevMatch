import React, { useState } from 'react'
import Layout from '../Components/Layout'
import styled from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Btn from '../Components/Button'
import Sidebar from '../Components/Sidebar'
import Input from '../Components/Input'
import { MdPlaylistAdd } from "react-icons/md";
import useInput from "../Hooks/useInput"

function Home() {

    const [modalOpen, setModalOpen] = useState('none');
    const openModal = (e) => (e.target.name === 'modal' ? setModalOpen('block') : console.log('Error'));
    const closeModal = (e) => (e.target.name === 'modal' ? setModalOpen('none') : console.log('Error'));

    // 이미지 state 
    const [imageFile, setImageFile] = useState({
        imageFile: "",
        viewUrl: "",
    });

    // UseInput 훅 초기화를 위해 set를 같이 가져가옴 
    const [title, onChangeTitleHandler, setTitle] = useInput();
    const [body, onChangeBodyHandler, setBody] = useInput();
    const [user, onChangeUserHandler, setUser] = useInput();






    return (
        <Layout>

            <Header />
            <Sidebar>


                <Btn
                    name={'modal'}
                    onClick={openModal}
                    sideBtn>
                    <MdPlaylistAdd
                        onClick={openModal} />
                </Btn>
                <Btn sideBtn>dd</Btn>


                <ModalOutArea isOpen={modalOpen}>
                    <ModalInArea isOpen={modalOpen}>



                        <Btn
                            sma
                            type="button"
                            onClick={closeModal}
                            name={'modal'}>
                            close
                        </Btn>


                    </ModalInArea>
                </ModalOutArea>


            </Sidebar>




            <Footer />

        </Layout>
    )
}

export default Home


// 모달 componet 
const ModalOutArea = styled.div`
    display: ${(props) => props.isOpen};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
`;

const ModalInArea = styled.div`
    display: ${(props) => props.isOpen};
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background-color: ${(props) => props.color};
    width: 31.25rem;
    height: 40.625rem;
    background-color: #edf2ff;
    color: #fff;
`;


