import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import styled from 'styled-components';
import Btn from '../Components/Button';
import Sidebar from '../Components/Sidebar';
import Input from '../Components/Input';
import { MdPlaylistAdd } from 'react-icons/md';
import useInput from '../Hooks/useInput';
import { MdTitle } from 'react-icons/md';
import imageCompression from 'browser-image-compression';
import { ModalOutArea, ModalInArea } from '../Style/ModalStyle';
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { ListArea } from '../Style/MainpageStyle';
import ProjectList from '../Components/List/ProjectList';
import { PostProject, GetProject } from '../axios/api';
import { useMutation } from "react-query";



function Home() {

    const getToken = Cookies.get('token');

    const { isLoading, isError, data } = useQuery("project", () =>
        GetProject({ token: getToken })
    )
    // console.log(data)





    const [modalOpen, setModalOpen] = useState('none');
    const openModal = (e) =>
        e.target.name === 'modal' ? setModalOpen('block') : console.log('Error');
    const closeModal = (e) =>
        e.target.name === 'modal' ? setModalOpen('none') : console.log('Error');

    // UseInput 훅 초기화를 위해 set를 같이 가져가옴
    const [title, onChangeTitleHandler, setTitle] = useInput();
    const [body, onChangeBodyHandler, setBody] = useInput();
    const [formImagin, setFormformImagin] = useState(new FormData());

    // 프론트 백엔드인원수를 위한 로직
    const min = 0;
    const max = 5;

    // const navigate = useNavigate();


    const ProjectPost = useMutation(PostProject, {
        onSuccess: () => {
            console.log('성공')
            
        }
    })


    const [backend, setBackend] = useState(1);
    const [frontend, setFrontend] = useState(1);

    const BackendNumberHandlerChange = (e) => {
        const back = Math.max(min, Math.min(max, Number(e.target.value)));
        setBackend(back);
    };

    const FrontedNumberHandlerChange = (e) => {
        const front = Math.max(min, Math.min(max, Number(e.target.value)));
        setFrontend(front);
    };


    // 이미지 state
    const [imageFile, setImageFile] = useState({
        imageFile: '',
        viewUrl: '',
    });
    // console.log(imageFile)
    const [loaded, setLoaded] = useState(false);

    let imageRef;

    const onChangeUploadHandler = async (e) => {
        // console.log("사진 업로드 버튼 클릭");
        e.preventDefault();

        const imageFile = e.target.files[0];
        console.log('Before Compression: ', imageFile.size);

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };

        try {
            const compressedFile = await imageCompression(imageFile, options);

            const formImg = new FormData();
            formImg.append('image', compressedFile);
            setFormformImagin(formImg);
 

            console.log('After Compression: ', compressedFile.size);


            const fileReader = new FileReader()
            // console.log(compressedFile);
            fileReader.readAsDataURL(compressedFile);

            fileReader.onload = () => {
                setImageFile({
                    viewUrl: String(fileReader.result),
                });
                setLoaded(true);
            };
        } catch (error) {
            console.log(error);
        }
    };

    // 사진 삭제
    const onClickDeleteHandler = () => {
        // console.log("사진 삭제 버튼 클릭");
        setImageFile({
            viewUrl: '',
        });
    };

    // SelectBox 옵션
    const selectBackList = ['Node.js', 'Spring', 'Java'];
    const selectFrontList = ['React.js', 'Js', 'Vue'];

    const [SelectedBack, setSelectedBack] = useState('Spring');
    const [SelectedFront, setSelectedFront] = useState('React');

    const selectBackHandler = (e) => {
        setSelectedBack(e.target.value);
    };
    const selectFrontHandler = (e) => {
        setSelectedFront(e.target.value);
    };

    // React-Query로 데이터 받아오기
    // const { isLoading, isError, data } = useQuery("list", GetList)

    // if (isLoading) {
    //     return <h1>로딩중입니다..!</h1>
    // }
    // if (isError) {
    //     return <div>에러!!</div>
    // }



    const onSonSubmituAddValue = async (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', body);
        formData.append('frontEndStack', SelectedFront);
        formData.append('backEndStack', SelectedBack);
        formData.append('backEndMember', backend);
        formData.append('frontEndMember', frontend);
        // formData.append('image', formImagin);

        for (const keyValue of formImagin) {
            formData.append(keyValue[0], keyValue[1]);
        }

        setTitle('');
        setBody('');
        setSelectedFront('');
        setSelectedBack('');
        setBackend('');
        setFrontend('')
        setImageFile('')
        setModalOpen('none')
        alert('등록완료!')

        // /* value 확인하기 */
        // for (let value of formData.values()) {
        //     console.log(value);
        // }

        const GETTOKEN = Cookies.get('token');
        console.log(GETTOKEN)
        ProjectPost.mutate({ token: GETTOKEN, data: formData });
        // mutaion.mutate({ token: getToken, data: formData })
        // await api.post('api/project', formData, { headers: { Authorization: getToken }, });


    };

    return (
        <Layout>
            {/* <Header /> */}
            <Sidebar>
                <Btn name={'modal'} onClick={openModal} sideBtn>
                    <MdPlaylistAdd onClick={openModal} />
                </Btn>
                <Btn sideBtn>dd</Btn>

                {/* Modal  */}
                <ModalOutArea isOpen={modalOpen}>
                    <ModalInArea isOpen={modalOpen}>
                        <ModalInFrom onSubmit={onSonSubmituAddValue}>
                            {/* 이미지 */}
                            <ModalInImgBox>
                                <ModalInImgArear>
                                    {imageFile.imageFile !== '' ? (
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
                                            style={{ background: 'rgb(50, 111, 233)' }}
                                            lg
                                            onClick={() => imageRef.click()}
                                        >
                                            사진 업로드
                                        </Btn>
                                        <Btn
                                            style={{ background: '#ee8683' }}
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
                                {/* ProjectTitle  */}
                                <ModalTitleArea>
                                    <p>Title</p>
                                    <ModalinInputBoxArea>
                                        <Input
                                            type="text"
                                            value={title}
                                            onChange={onChangeTitleHandler}
                                            required
                                            placeholder="프로젝트 제목을 적어주세요!"
                                        />
                                        <div>
                                            <MdTitle />
                                        </div>
                                    </ModalinInputBoxArea>
                                </ModalTitleArea>

                                <ModaleSelectArea>
                                    <ModaleSelectWarp>
                                        <div>
                                            <p style={{ color: '#000', paddingBottom: '20px' }}>
                                                BackStack
                                            </p>
                                            <select
                                                onChange={selectBackHandler}
                                                value={SelectedBack}
                                                required
                                                style={{ width: '150px', height: '35px' }}
                                            >
                                                {selectBackList.map((item) => (
                                                    <option value={item} key={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </ModaleSelectWarp>

                                    <ModaleSelectWarp>
                                        <div>
                                            <p style={{ color: '#000', paddingBottom: '20px' }}>
                                                {' '}
                                                FrontStack{' '}
                                            </p>
                                            <select
                                                onChange={selectFrontHandler}
                                                value={SelectedFront}
                                                required
                                                style={{ width: '150px', height: '35px' }}
                                            >
                                                {selectFrontList.map((item) => (
                                                    <option value={item} key={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </ModaleSelectWarp>
                                </ModaleSelectArea>

                                {/* 모집인원 */}
                                <ModalEachNumberArea>
                                    <div>
                                        <p style={{ color: '#000', textAlign: 'center' }}>
                                            Backend
                                        </p>
                                        <Input
                                            type="number"
                                            value={backend}
                                            onChange={BackendNumberHandlerChange}
                                        />
                                    </div>
                                    <div>
                                        <p style={{ color: '#000', textAlign: 'center' }}>
                                            Frontend
                                        </p>
                                        <Input
                                            type="number"
                                            value={frontend}
                                            onChange={FrontedNumberHandlerChange}
                                        />
                                    </div>
                                </ModalEachNumberArea>

                                <ModalEachInputBoxBodyArea>
                                    <p style={{ color: '#000' }}>상세내용</p>
                                    <textarea
                                        style={{ width: '350px', height: '150px', padding: '15px' }}
                                        type="text"
                                        value={body}
                                        onChange={onChangeBodyHandler}
                                        required
                                        placeholder="프로젝트에 상세내용을 적어주세요"
                                    />
                                </ModalEachInputBoxBodyArea>

                                {/*   
                               
*/}
                            </ModalInWarpInputBox>

                            <Btn lg type="submit">
                                게시물 발행
                            </Btn>

                            <Btn lgred type="button" onClick={closeModal} name={'modal'}>
                                close
                            </Btn>
                        </ModalInFrom>
                    </ModalInArea>
                </ModalOutArea>
            </Sidebar>

            {/* 리스트컴포넌트자리 */}
            <ProjectList data={data} />




        </Layout>
    );
}

export default Home;

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
    opacity: 0.5;
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
    width: 49%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px 0;
`;

// 모달안 Title Area
const ModalTitleArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem 0;
    width: 25rem;
    height: 6.875rem;
    border-radius: 1.25rem;
    border: 1px solid #000;
    color: #000;
    padding: 1.25rem;
    > p {
        text-align: left;
    }
`;

const ModalinInputBoxArea = styled.div`
    position: relative;
    width: 50%;
    height: 40%;
    > input {
        position: absolute;
        width: 15.625rem;
        height: 3.125rem;
        padding-left: 2.5rem;
    }
    > div {
        position: absolute;
        top: 100%;
        left: 5%;
        transform: translateY(-50%);
        color: #000;
        font-size: 1.2rem;
    }
`;

const ModaleSelectArea = styled.div`
    width: 28.125rem;
    height: 6.875rem;
    border-radius: 1.25rem;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem 0.625rem;
`;

const ModaleSelectWarp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 90%;

    > div {
        display: flex;
        flex-direction: column;
    }
`;

const ModalEachNumberArea = styled.div`
    width: 28.125rem;
    height: 6.875rem;
    border-radius: 1.25rem;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.625rem 1.25rem;
    > div {
        width: 45%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const ModalEachInputBoxBodyArea = styled.div`
    width: 28.125rem;
    height: 12.5rem;
    border-radius: 1.25rem;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem 0;
`;
