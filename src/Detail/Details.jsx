import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Btn from '../Components/Button';
import Input from '../Components/Input';
import useInput from '../Hooks/useInput';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';

function Details() {
    const getDetailList = async () => {
        const response = await axios.get('http://localhost:4000/comment');
        return response.data;
    };

    const addComment = async () => {
        await axios.post('http://localhost:4000/comment');
    };

    const { isLoading, isError, data } = useQuery('comment', getDetailList);

    const mutation = useMutation(addComment, {
        onSuccess: () => {},
    });

    const [iniComment, setInitComment] = useState({ title: '' });

    const [comment, onCommentHandler, setComment] = useInput('');

    const [editCmt, onEditCmt, setEditCmt] = useInput('');
    const [showInput, setShowInput] = useState(false);
    const [showCancel, setShowCancel] = useState(true);
    const [likeCount, setLikeCount] = useState(0);

    const likeCountButtonHandler = () => {
        setLikeCount(likeCount + 1);
    };

    const onAddCommentBtnhandler = () => {
        mutation.mutate({
            comment,
        });
        setEditCmt(comment);
        setComment('');
    };
    const onShowInputHandler = () => {
        if (showInput === true) {
            setInitComment({
                title: editCmt,
            });
            setShowInput(!showInput);
            setShowCancel(!showCancel);
        } else {
            setShowInput(!showInput);
            setShowCancel(!showCancel);
        }
    };

    const cancelButtonHandler = () => {
        setShowInput(!showInput);
        setShowCancel(!showCancel);
    };

    return (
        <>
            <StDetailContaitner>
                <StImageBox>이미지</StImageBox>
                <div>
                    <StRecruitList>
                        <h3>중고거래 플랫폼 개발해요!</h3>
                    </StRecruitList>
                    <StRecruitList>
                        <StMiniLayout>
                            <h3>PART</h3>
                        </StMiniLayout>
                        <StMiniLayout>
                            <h3>FE : 0</h3>
                        </StMiniLayout>
                        <StMiniLayout>
                            <h3>BE : 0</h3>
                        </StMiniLayout>
                    </StRecruitList>
                    <StRecruitList>
                        <StMiniLayout>
                            <h3>STACK</h3>
                        </StMiniLayout>
                        <StStackLayout>
                            <h4>JavaScript, Java, React, Spring</h4>
                        </StStackLayout>
                    </StRecruitList>
                </div>
                <StDetailLayout>
                    <h3>Detail</h3>
                </StDetailLayout>
                <StLikeNumber>{likeCount}</StLikeNumber>
                <Btn me onClick={likeCountButtonHandler}>
                    LIKE❤️
                </Btn>
                <StDetailBox>즐겁게 개발하실분들 댓글로 신청해주세요!</StDetailBox>

                {data?.map((item) => {
                    return (
                        <>
                            <StCommentLayout>
                                <StMiniLayout>
                                    <h3>COMMENT</h3>
                                </StMiniLayout>
                                <Input me type="text" value={comment} onChange={onCommentHandler} />
                                <Btn me onClick={onAddCommentBtnhandler}>
                                    {' '}
                                    add
                                </Btn>
                            </StCommentLayout>
                            <StCommentBox>
                                <StMiniLayout>
                                    <h3>{item.nickname}</h3>
                                </StMiniLayout>
                                <StCommentListBox>
                                    {showInput ? (
                                        <Input
                                            me
                                            type="text"
                                            value={editCmt}
                                            onChange={onEditCmt}
                                        />
                                    ) : (
                                        <h4>{item.comment} </h4>
                                    )}
                                </StCommentListBox>
                                <StMiniLayout style={{ gap: '5px' }}>
                                    <Btn sm onClick={onShowInputHandler}>
                                        수정
                                    </Btn>
                                    {showCancel ? (
                                        <Btn sm>삭제</Btn>
                                    ) : (
                                        <Btn sm onClick={cancelButtonHandler}>
                                            취소
                                        </Btn>
                                    )}
                                </StMiniLayout>
                            </StCommentBox>
                        </>
                    );
                })}
            </StDetailContaitner>
        </>
    );
}

export default Details;

//상세페이지 전체 컨테이너
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

//상세페이지 이미지 박스
const StImageBox = styled.div`
    width: 15.625rem;
    height: 12.5rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 0.625rem;
    margin-right: 20px;
`;

// 상세페이지 모집요강 리스트
const StRecruitList = styled.div`
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

// 상세내용 DetailLayout
const StDetailLayout = styled.div`
    width: 37.5rem;
    height: 1.875rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
`;

//좋아요 넘버 박스
const StLikeNumber = styled.div`
    width: 3.125rem;
    height: 1.875rem;
    display: flex;
    font-size: 25px;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`;

//상세내용 박스
const StDetailBox = styled.div`
    width: 47.5rem;
    min-height: 12.5rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 3px;
    margin-top: 5px;
    margin-bottom: 20px;
`;

//miniLayout
const StMiniLayout = styled.div`
    width: 10rem;
    height: 3.75rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
`;

//stack Layout
const StStackLayout = styled.div`
    width: 20rem;
    height: 3.75rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

//comment layout
const StCommentLayout = styled.div`
    width: 36.875rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin: auto;
    justify-content: space-between;
`;

//댓글 박스
const StCommentBox = styled.div`
    width: 47.5rem;
    min-height: 3.75rem;
    /* border: 1px solid black; */
    margin: 0.625rem auto;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

//댓글 리스트 박스
const StCommentListBox = styled.div`
    width: 26.875rem;
    height: 3.75rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;
