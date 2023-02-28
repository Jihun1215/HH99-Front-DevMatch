import React from 'react';
import styled from 'styled-components';
import { StContaitner } from '../Detail/Details';
import Input from '../Components/Input';
import Btn from '../Components/Button';
import useInput from '../Hooks/useInput';
import axios from 'axios';

function Mypages() {
    //마이페이지에서 새롭게 추가할 항목들
    const [selectedPart, selectPartHandler, setSelectedPart] = useInput('');
    const [introduction, introductionEditButton, setIntroduction] = useInput('');

    //세션 스토리지에서 받아올 항목들
    const [nickName, nickNameEditButton, setNickName] = useInput('');

    const editSelectedPart = async () => {
        await axios.put('');
    };

    return (
        <div>
            <StContaitner>
                <StInfoLayout>
                    <StInfoBox>ID</StInfoBox>
                    test1234
                </StInfoLayout>
                <StInfoLayout>
                    <StInfoBox>NickName</StInfoBox>{' '}
                    <Input type="text" style={{ border: 'none', marginRight: '20px' }} me />
                    <Btn onClick={nickNameEditButton} me>
                        변경
                    </Btn>
                </StInfoLayout>

                <StInfoLayout>
                    <StInfoBox>Part</StInfoBox>

                    <StSelectBox>
                        <h4>Backend</h4>
                        <input
                            style={{ width: '20px', height: '20px' }}
                            type="radio"
                            name="select"
                            onChange={selectPartHandler}
                            value="Backend"
                            required
                        />
                        <h4>Frontend</h4>
                        <input
                            style={{ width: '20px', height: '20px' }}
                            type="radio"
                            name="select"
                            onChange={selectPartHandler}
                            value="Frontend"
                            required
                        />
                        <Btn me>변경</Btn>
                    </StSelectBox>
                </StInfoLayout>
                <StInfoLayout style={{ minHeight: '150px' }}>
                    {' '}
                    <StInfoBox>Introduce</StInfoBox>
                    <StTextArea type="text" />
                    <Btn me onClick={introductionEditButton}>
                        변경
                    </Btn>
                </StInfoLayout>
            </StContaitner>
        </div>
    );
}

export default Mypages;

// 마이페이지 레이아웃
const StInfoLayout = styled.div`
    width: 36.875rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 5px;
    margin-bottom: 20px;
    /* border: 1px solid black; */
`;

// 정보 박스 레이아웃
const StInfoBox = styled.form`
    width: 6.875rem;
    height: 3.125rem;
    border-radius: 5px;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 20px;
`;

// 파트 선택
const StSelectBox = styled.div`
    width: 460px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-left: 10px;
    /* border: 1px solid black; */
`;

// 소개글
const StTextArea = styled.textarea`
    width: 340px;
    height: 150px;
    border-radius: 10px;
    padding: 15px;
    margin-right: 20px;
    border: none;
    outline: none;
`;
