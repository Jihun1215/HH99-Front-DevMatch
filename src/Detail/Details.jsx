import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Btn from '../Components/Button';
import Input from '../Components/Input';
import useInput from '../Hooks/useInput';

function Details() {
    const getDetailList = async () => {
        const response = await axios.get('');
        return response;
    };

    const [comment, onCommentHandler, setComment] = useInput('');

    return (
        <>
            <StDetailContaitner>
                <StImageBox>이미지</StImageBox>
                <div>
                    <StBox>
                        <h3>중고거래 플랫폼 개발해요!</h3>
                    </StBox>
                    <StBox>
                        <StBox4>
                            <h3>PART</h3>
                        </StBox4>
                        <StBox4>
                            <h3>FE : 0</h3>
                        </StBox4>
                        <StBox4>
                            <h3>BE : 0</h3>
                        </StBox4>
                    </StBox>
                    <StBox>
                        <StBox4>
                            <h3>STACK</h3>
                        </StBox4>
                        <StBox5>
                            <h4>JavaScript, Java, React, Spring</h4>
                        </StBox5>
                    </StBox>
                </div>
                <StBox2>
                    <div>
                        <h3>Detail</h3>
                    </div>
                </StBox2>
                <StBox3>0</StBox3>
                <Btn me>LIKE❤️</Btn>
                <StDetailBox>즐겁게 개발하실분들 댓글로 신청해주세요!</StDetailBox>
                <StBox6>
                    <StBox4>
                        <h3>COMMENT</h3>
                    </StBox4>

                    <Input me type="text" value={comment} onchange={onCommentHandler} />
                    <Btn me> add</Btn>
                </StBox6>
            </StDetailContaitner>
        </>
    );
}

export default Details;

const StDetailContaitner = styled.div`
    width: 50rem;
    margin: 30px auto;
    padding: 25px;
    background-color: #dbe4ff;
    border-radius: 0.625rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const StImageBox = styled.div`
    width: 15.625rem;
    height: 12.5rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 0.625rem;
    margin-right: 20px;
`;

const StBox = styled.div`
    width: 30rem;
    min-height: 3.75rem;
    margin-bottom: 7px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const StBox2 = styled.div`
    width: 37.5rem;
    height: 1.875rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
`;

const StBox3 = styled.div`
    width: 3.125rem;
    height: 1.875rem;
    display: flex;
    font-size: 25px;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`;

const StDetailBox = styled.div`
    width: 47.5rem;
    min-height: 12.5rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 3px;
    margin-top: 5px;
    margin-bottom: 20px;
`;

const StBox4 = styled.div`
    width: 10rem;
    height: 60px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    /* border: 1px solid black; */
    align-items: center;
`;

const StBox5 = styled.div`
    width: 20rem;
    height: 3.75rem;
    border-radius: 10px;
`;

const StBox6 = styled.div`
    width: 36.875rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    /* border: 1px solid black; */
    gap: 1.25rem;
    margin: auto;
    justify-content: space-between;
`;
