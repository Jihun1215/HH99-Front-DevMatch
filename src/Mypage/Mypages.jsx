import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Components/Input';
import Btn from '../Components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { AllUserInfo } from '../axios/api';
import useInput from '../Hooks/useInput';
import { api } from '../axios/api';

function Mypages() {
    const getToken = Cookies.get('token');
    const params = useParams();

    const EditMyInfo = async () => {
        try {
            const response = await api.put(`api/user/${userID}`, data2, {
                headers: {
                    Authorization: getToken,
                },
            });
            return response.data;
        } catch (error) {
            // console.log(error);
        }
    };
    const editUserInfo = useQuery('edituser', EditMyInfo);


    const { isLoading, isError, data } = useQuery('GETUSERINFO', AllUserInfo);
    const navigate = useNavigate();

    const info = sessionStorage.getItem('userInfo');
    const USERINFO = JSON.parse(info);
    const userID = USERINFO.id;

    const foundData = data?.find((item) => item.id === Number(USERINFO.id));

    const queryClinet = useQueryClient();
    const EditInfo = useMutation(EditMyInfo, {
        onSuccess: () => {
            queryClinet.invalidateQueries('GETUSERINFO');
        },
    });

    const [nickName, onChangeNickNameHandler, setNickName] = useInput(foundData?.nickname);

    const [selectedPart, setSelectedPart] = useState(foundData?.part);
    const [introduction, setIntroduction] = useState(foundData?.introduction);

    const selectPartHandler = (e) => {
        setSelectedPart(e.target.value);
    };

    const introductionEditButton = (e) => {
        setIntroduction(e.target.value);
    };

    const data2 = {
        nickname: nickName,
        introduction: introduction,
        part: selectedPart,
    };
    
    const EditMyInfoChangeHandler = async (e) => {
        e.preventDefault();
        EditInfo.mutate({ token: getToken, data2, userID });
        alert('수정성공!')

    };

    return (
        <div>
            {isLoading === false && (
                <MyPageArea onSubmit={EditMyInfoChangeHandler}>
                    <StInfoLayout>
                        <StInfoBox>ID</StInfoBox>
                        {foundData?.username}
                    </StInfoLayout>
                    <StInfoLayout>
                        <StInfoBox>NickName</StInfoBox>
                        <Input
                            type="text"
                            style={{ border: 'none', marginRight: '20px' }}
                            value={nickName || ''}
                            placeholder={foundData?.nickname}
                            onChange={onChangeNickNameHandler}
                            me
                        />
                     
                        <div>2~6자 영문 한글로 작성</div>
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
                            <div>현재파트{foundData?.part}</div>
                   
                        </StSelectBox>
                    </StInfoLayout>
                    <StInfoLayout style={{ minHeight: '150px' }}>
                        <StInfoBox>Introduce</StInfoBox>
                        <StTextArea
                            type="text"
                            value={introduction}
                            onChange={introductionEditButton}
                            placeholder={foundData?.introduction}
                            required
                        />
                       
                    </StInfoLayout>

                    <EditButtonArea>
                        <Btn me type="submit">
                            내정보 수정
                        </Btn>
                    </EditButtonArea>
                </MyPageArea>
            )}
        </div>
    );
}

export default Mypages;

const MyPageArea = styled.form`
    width: 50rem;
    height: 35rem;
    border: 2px solid #000;
    margin: 50px auto;
`;

const StInfoLayout = styled.div`
    width: 36.875rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    margin: 25px auto;
    border-radius: 5px;
    margin-bottom: 20px;
    /* border: 1px solid black;  */
`;

const StInfoBox = styled.div`
    width: 6.875rem;
    height: 3.125rem;
    border-radius: 5px;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 20px;
`;
const StSelectBox = styled.div`
    width: 18.75rem;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-left: 10px;
    /* border: 1px solid black; */
`;

const StTextArea = styled.textarea`
    width: 340px;
    height: 7.8125rem;
    border-radius: 10px;
    padding: 15px;
    margin-right: 20px;
    border: none;
    outline: none;
`;

const EditButtonArea = styled.div`
    width: 12.5rem;
    margin: 0 auto;
`;
