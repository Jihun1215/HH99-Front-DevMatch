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
import { FaCodeBranch } from 'react-icons/fa';
import { MdTitle, MdPersonAdd } from 'react-icons/md';
import imageCompression from 'browser-image-compression';
import { ModalOutArea, ModalInArea } from '../Style/ModalStyle'
// import { GetList } from '../axios/api'
import { useQuery } from 'react-query'
import Cookies from 'js-cookie';
import { ListArea } from '../Style/MainpageStyle'

function Home() {


    const [modalOpen, setModalOpen] = useState('none');
    const openModal = (e) => (e.target.name === 'modal' ? setModalOpen('block') : console.log('Error'));
    const closeModal = (e) => (e.target.name === 'modal' ? setModalOpen('none') : console.log('Error'));



    // UseInput 훅 초기화를 위해 set를 같이 가져가옴 
    const [title, onChangeTitleHandler, setTitle] = useInput();
    const [body, onChangeBodyHandler, setBody] = useInput();

    // 프론트 백엔드인원수를 위한 로직
    const min = 0;
    const max = 3;


    const [backend, setBackend] = useState(0);
    const [frontend, setFrontend] = useState(0);

    const BackendNumberHandlerChange = (e) => {
        const back = Math.max(min, Math.min(max, Number(e.target.value)))
        setBackend(back)
    }

    const FrontedNumberHandlerChange = (e) => {
        const front = Math.max(min, Math.min(max, Number(e.target.value)))
        setFrontend(front)
    }



    // 이미지 로직 

    // 이미지 state 
    const [imageFile, setImageFile] = useState({
        imageFile: "",
        viewUrl: "",
    });

    const [loaded, setLoaded] = useState(false);

    let imageRef;

    const onChangeUploadHandler = async (e) => {
        console.log("사진 업로드 버튼 클릭");
        e.preventDefault();

        const imageFile = e.target.files?.[0];
        console.log('Before Compression: ', imageFile.size);

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };
        try {
            const compressedFile = await imageCompression(imageFile, options);
            console.log('After Compression: ', compressedFile.size);
            const fileReader = new FileReader();
            console.log(compressedFile);
            fileReader.readAsDataURL(compressedFile);

            fileReader.onload = () => {
                setImageFile({
                    viewUrl: String(fileReader.result),
                });
            };
        } catch (error) {
            console.log(error);
        }
    };

    // 사진 삭제
    const onClickDeleteHandler = () => {
        // console.log("사진 삭제 버튼 클릭");
        setImageFile({
            viewUrl: ""
        });
    };

    // SelectBox 옵션 
    const selectList = ["React", "Spring", "Java", "JS"];
    const [Selected, setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };




    // React-Query로 데이터 받아오기 
    // const { isLoading, isError, data } = useQuery("list", GetList)

    // if (isLoading) {
    //     return <h1>로딩중입니다..!</h1>
    // }
    // if (isError) {
    //     return <div>에러!!</div>
    // }ㅁ

    const AddData = {
        title: title,
        // content: body,
        img: imageFile.viewUrl,
        strack: Selected,
        body: body,
        // number
        backendMember: backend,
        frontendMember: frontend

    }

    // Form안에 버튼을 눌러 정보를 서버로 보냄 
    const onSonSubmituAddValue = (e) => {
        e.preventDefault()
        alert('Selected')
        if (Selected !== '') {
            console.log(AddData)
        }
    }


    const getToken = Cookies.get('token')
    // console.log(getToken)


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

                                {/* Title */}
                                <ModalEachInputBox>
                                    <p>Title</p>
                                    <ModalEachInputBoxInputArea>

                                        <Input
                                            type="text"
                                            value={title}
                                            onChange={onChangeTitleHandler}
                                            required
                                        />

                                        <div><MdTitle /></div>
                                    </ModalEachInputBoxInputArea>
                                </ModalEachInputBox>

                                {/* 백프론트 선택  */}

                                <ModalEachInputBox>
                                    <p>모집인원정보</p>
                                    <ModalEachInputBoxselect>

                                        <select onChange={handleSelect} value={Selected}>
                                            {selectList.map((item) => (
                                                <option value={item} key={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>

                                        <div><FaCodeBranch /></div>

                                    </ModalEachInputBoxselect>
                                </ModalEachInputBox>


                                {/* 모집인원  */}
                                <ModalEachInputBoxWarp>
                                    <div>
                                        <p style={{ color: "#000", textAlign: 'center' }}>Backend</p>
                                        <Input
                                            type="number"
                                            value={backend}
                                            onChange={BackendNumberHandlerChange}
                                            required
                                        />

                                    </div>
                                    <div>
                                        <p style={{ color: "#000", textAlign: 'center' }}>Frontend</p>
                                        <Input
                                            type="number"
                                            value={frontend}
                                            onChange={FrontedNumberHandlerChange}
                                            required />
                                        <span>Front: {frontend}</span>
                                    </div>


                                    {/* <ModalEachInputBoxInputArea>

                                        <Input
                                            type="number"
                                            value={number}
                                            onChange={onChangeNumberHandler}
                                        />

                                        <div><MdTitle /></div>
                                    </ModalEachInputBoxInputArea> */}
                                </ModalEachInputBoxWarp>


                                {/* 상세내용  */}

                                <ModalEachInputBoxBodyArea>
                                    <p style={{ color: "#000" }}>상세내용</p>
                                    <textarea style={{ width: "350px", height: "150px", padding: "15px" }}
                                        type="text"
                                        value={body}
                                        onChange={onChangeBodyHandler}
                                        required
                                    />
                                    {/* <div><MdTitle /></div> */}

                                </ModalEachInputBoxBodyArea>






                            </ModalInWarpInputBox>


                            <Btn
                                lg
                                type="submit"
                            >
                                게시물 발행
                            </Btn>

                            <Btn
                                lgred
                                type="button"
                                onClick={closeModal}
                                name={'modal'}>
                                close
                            </Btn>

                        </ModalInFrom>

                    </ModalInArea>
                </ModalOutArea>

            </Sidebar>

            {/* 쿠키가 있으면 블러 처리 안하고 보여주고 있으면 블러 처리하고 리스트 보여주기 */}
            {
                getToken === undefined ?
                    // 쿠키 없을떄 보여줄 것들 
                    <ListArea style={{
                        textAlign: 'center'
                    }}>
                        리스트블러처리
                        <div>ddd</div></ListArea>
                    // 쿠키가 있을때 보여줄 것들 
                    : <ListArea style={{
                        textAlign: 'center'
                    }}>리스트</ListArea>
            }
            <Footer />

        </Layout>
    )
}

export default Home


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


// modal Input Form 
const ModalInWarpInputBox = styled.div`
    border: 1px solid red;
    width: 49%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px 0;
`;

const ModalEachInputBox = styled.div`
    width: 21.875rem;
    height: 6.875rem;
    border-radius: 1.25rem;
    border: 2px solid black;  
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: .625rem 0;

    > p {  
        text-align: left;
        padding-top: .3125rem;
        color: #000;
    };
  `;

const ModalEachInputBoxWarp = styled.div`
    width: 28.125rem;
    height: 6.875rem;
    border-radius: 1.25rem;
    border: 2px solid black;  
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: .625rem 1.25rem;
    > div {
        margin: 0 auto;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        gap: 10px 0;
    };
    > p {
        text-align: center;
        color: #000;
    }
`;

const ModalEachInputBoxBodyArea = styled.div`
    width: 28.125rem;
    height: 12.5rem;
    border-radius: 1.25rem;
    border: 2px solid red;  
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: .625rem 0; 
`;



const ModalEachInputBoxInputArea = styled.div`
  position: relative;
  width: 90%;
  height: 40%;
  > input {
      position: absolute;
      width: 100%;
      height: 100%;
      padding-left: 2.5rem;
      border: none;
      outline: none;
      border-bottom : 2px solid black;
  }
  > div {
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
      color: #000;
      font-size: 1.2rem;
  };
  `;






const ModalEachInputBoxselect = styled.div`
position: relative;
width: 90%;
height: 40%;
> select {
    margin-left: 3.125rem;
    position: absolute;
    width: 70%;
    height: 70%;
    text-align: center;
    border: none;
    outline: none;
    border : 2px solid black;
    
}
> div {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    color: #000;
    font-size: 1.2rem;
};
`;


