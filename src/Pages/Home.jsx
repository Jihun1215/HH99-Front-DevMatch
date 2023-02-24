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
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { MdTitle } from 'react-icons/md';
import img from '../Style/Img/img.png';

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


    const onSonSubmituAddValue = (e) => {
        e.preventDefault()
    }


    // 이미지 
    const [loaded, setLoaded] = useState(false);

    let imageRef;

    const onChangeUploadHandler = (e) => {
        console.log("사진 업로드 버튼 클릭");
        e.preventDefault();

        const fileReader = new FileReader();
        if (e.target.files[0]) {
            setLoaded(true);
            fileReader.readAsDataURL(e.target.files[0]);
        }
        fileReader.onload = () => {
            setImageFile({
                viewUrl: fileReader.result
            });
            // console.log(fileReader.result)
            setLoaded(true);
        };
        // console.log(loaded);
    };



    const onClickDeleteHandler = () => {
        // console.log("사진 삭제 버튼 클릭");
        setImageFile({
            viewUrl: ""
        });
    };


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

                {/* Modal  */}
                <ModalOutArea isOpen={modalOpen}>
                    <ModalInArea isOpen={modalOpen}>

                        <ModalInFrom onSubmit={onSonSubmituAddValue}>



                            {/* 이미지 */}

                            <ModalInImgBox>


                                <ModalInImgArear>
                                    {imageFile.imageFile !== "" ? (
                                        <IMGSIZE src={imageFile.viewUrl} />
                                    ) : (
                                        <NoImgSIZE>Loading...</NoImgSIZE>
                                    )}
                                    <ModalImgInput
                                        type="file"
                                        accept="image/*"
                                        ref={(refer) => (imageRef = refer)}
                                        onChange={onChangeUploadHandler}
                                    />
                                </ModalInImgArear>

                                <ModalInButGround>

                                    <SCustomButtonWrapper>

                                        <Btn
                                            style={{ background: "rgb(50, 111, 233)" }}
                                            lg
                                            onClick={() => imageRef.click()}
                                        >
                                            사진 업로드
                                        </Btn>
                                        <Btn
                                            style={{ background: "#ee8683" }}
                                            lg
                                            onClick={onClickDeleteHandler}
                                        >
                                            사진 삭제
                                        </Btn>
                                    </SCustomButtonWrapper>

                                </ModalInButGround>


                            </ModalInImgBox>

                            {/* 인풋창 */}

                            <ModalInWarpInputBox>

                                인풋

                            </ModalInWarpInputBox>


                            <Btn
                                lg
                                type="button"
                                onClick={closeModal}
                                name={'modal'}>
                                close
                            </Btn>

                        </ModalInFrom>




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
    width: 68.75rem;
    height: 46.875rem;
    background-color: #edf2ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;
// 전체Form 
const ModalInFrom = styled.form`
    width: 98%;
    height: 98%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
`;
// Form안에 이미지
// const ModalInWarpImgBox = styled.div`
//     width: 49%;
//     height: 90%;
//     display: flex;
//     flex-direction: column;
//     align-content: center;
//     justify-content: center;
// `;





// const ModalInImgBtnGround = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: .625rem 0;
//     gap: 20px;
// `





// modal Input Form 
const ModalInWarpInputBox = styled.div`
    border: 1px solid red;
    width: 49%;
    height: 90%;
    
`;




// const LoginEachInputBox = styled.div`
//     position: relative;
//     width: 21.875rem;
//     height: 6.875rem;
//     border-radius: 1.25rem;
//     border: 2px solid black;  
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//     gap: .625rem 0;


//     > p {  
//         text-align: left;
//         padding-top: .3125rem;
//         color: #000;
//     };
//   `;

// const LoginEachInputBoxInputArea = styled.div`
//   position: relative;
//   width: 90%;
//   height: 40%;
//   > input {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       padding-left: 2.5rem;
//       border: none;
//       outline: none;
//       border-bottom : 2px solid black;
//   }
//   > div {
//       position: absolute;
//       top: 50%;
//       left: 5%;
//       transform: translateY(-50%);
//       color: #000;
//       font-size: 1.2rem;

//   }
//   `



// Form IMG BOX
const ModalInImgBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 49%;
    height: 90%;
`;

// 이미지 영역 
const ModalInImgArear = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #1e1e1e;
`;

// IMG
const IMGSIZE = styled.img`
    width: 31.25rem;
    height: 29.0625rem;
    margin: 0 auto;
`;

// IMG 없을 떄 
const NoImgSIZE = styled.div`
    width: 31.25rem;
    height: 28.5rem;
    background: #5c7cfa;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    opacity:0.5;
`;

const ModalImgInput = styled.input`
    display: none;
`;







const ModalInButGround = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    flex-direction: column;
`;



const SCustomButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0 1.875rem;

`;

// const SCustomButton = styled.div`
//     text-align: center;
//     width: 150px;
//     padding: 10px 15px;
//     border-radius: 7px;
//     cursor: pointer;
//     margin: 0 0 20px 0;
//     background-color: ${({ btnValue }) =>
//         btnValue === "primary" ? "rgb(50, 111, 233)" : "rgb(238, 134, 131)"};
//     color: #fff;
// `;






