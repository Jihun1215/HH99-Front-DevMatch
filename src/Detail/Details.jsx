import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Btn from '../Components/Button';
import Input from '../Components/Input';
import Sidebar from '../Components/Sidebar';
import { ModalOutArea, ModalInArea } from '../Style/ModalStyle';
import useInput from '../Hooks/useInput';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

function Details() {
    //댓글 작성시 닉네임 받아야함

    //api 부분

    //현재 접속자 정보
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/user/2`).then((response) => {
            setCurrentUser(response.data);
        });
    }, []);

    //프로젝트 조회

    const getDetailProject = async () => {
        const response = await axios.get('http://localhost:4000/project/1');
        return response.data;
    };

    //댓글 조회
    const getDetailComment = async () => {
        const response = await axios.get('http://localhost:4000/comment');
        return response.data;
    };

    //댓글 추가
    const addComment = async (newCommnet) => {
        await axios.post('http://localhost:4000/comment', newCommnet);
    };

    // 댓글 수정
    const editComment = async (id) => {
        await axios.put(`http://localhost:4000/comment/${id}`, {
            comment: editCmt,
        });
    };

    // 댓글 삭제
    const deleteComment = async (id) => {
        await axios.delete(`http://localhost:4000/comment/${id}`);
    };

    //리액트 쿼리 부분

    //프로젝트 데이터
    const projectData = useQuery('project', getDetailProject);

    //댓글 데이터
    const commentData = useQuery('comment', getDetailComment);

    const queryclient = useQueryClient();
    const mutation = useMutation(addComment, {
        onSuccess: () => {
            queryclient.invalidateQueries('comment');
        },
    });

    const mutation2 = useMutation(editComment, {
        onSuccess: () => {
            queryclient.invalidateQueries('comment');
        },
    });

    const mutation3 = useMutation(deleteComment, {
        onSuccess: () => {
            queryclient.invalidateQueries('comment');
        },
    });

    const [comment, onCommentHandler, setComment] = useInput('');

    const [editCmt, onEditCmt, setEditCmt] = useInput('');
    const [showInput, setShowInput] = useState(false);
    const [showCancel, setShowCancel] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [showEdit, setShowEdit] = useState(false);

    // 임시 좋아요 카운트 버튼 총 카운트 보내야함
    // 좋아요는 유저 한명당 1회만 가능한지?
    const likeCountButtonHandler = () => {
        setLikeCount(likeCount + 1);
    };

    //댓글 추가 버튼
    const onAddCommentBtnhandler = (e) => {
        if (comment === '') {
            alert('빈칸입니다.');
            return false;
        } else {
            mutation.mutate({
                comment: comment,
                username: currentUser.username,
            });
            setEditCmt(comment);
            setComment('');
        }
    };

    //댓글 수정버튼 클릭시 수정 인풋창 출력
    //data는 댓글 리스트임
    const onShowInputHandler = (id) => {
        commentData.data.find((item) => {
            if (item.id === id) {
                if (item.username === currentUser.username) {
                    setEditCmt(item.comment);
                    setShowInput((prevState) => (prevState === id ? true : id));
                    setShowCancel((prevState) => (prevState === id ? false : id));
                    setShowEdit((prevState) => (prevState === id ? false : id));
                } else {
                    alert('작성자만 수정 가능합니다');
                }
            }
        });
    };

    //댓글 내용 수정 버튼
    const editButtonHandler = (id) => {
        if (editCmt === '') {
            alert('빈칸입니다.');
            return;
        } else {
            mutation2.mutate(id);
            setShowInput(!showInput);
            setShowCancel(!showCancel);
            setShowEdit(!showEdit);
        }
    };

    //댓글 수정 취소 버튼
    const cancelButtonHandler = () => {
        setShowInput(!showInput);
        setShowCancel(!showCancel);
        setShowEdit(!showEdit);
    };

    //댓글 삭제 버튼
    const deleteButtonHandler = (id) => {
        commentData.data.find((item) => {
            if (item.id === id) {
                if (item.username === currentUser.username) {
                    mutation3.mutate(id);
                    setShowInput(!showInput);
                    setShowCancel(!showCancel);
                    setShowEdit(!showEdit);
                } else {
                    alert('작성자만 삭제 가능합니다');
                }
            }
        });
    };

    const [modalOpen, setModalOpen] = useState('none');
    const openModal = (e) =>
        e.target.name === 'modal' ? setModalOpen('block') : console.log('Error');
    const closeModal = (e) =>
        e.target.name === 'modal' ? setModalOpen('none') : console.log('Error');

    return (
        <>
            <Sidebar>
                <Btn name={'modal'} onClick={openModal} sideBtn>
                    <AiFillEdit />
                </Btn>
                <Btn sideBtn>
                    <AiFillDelete />
                </Btn>

                <ModalOutArea isOpen={modalOpen}>
                    <ModalInArea isOpen={modalOpen}>
                        <Btn name={'modal'} onClick={closeModal}>
                            close
                        </Btn>
                    </ModalInArea>
                </ModalOutArea>
            </Sidebar>

            <StContaitner>
                <StImageBox>이미지</StImageBox>
                <div>
                    <StRecruitList>
                        <h3>{projectData.data?.title}</h3>
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
                <StDetailBox>{projectData.data?.detail}</StDetailBox>

                <StCommentLayout>
                    <StMiniLayout>
                        <h3>COMMENT</h3>
                    </StMiniLayout>
                    <Input
                        me
                        type="text"
                        placeholder="코멘트를 남겨주세요"
                        style={{ border: 'none' }}
                        value={comment}
                        onChange={onCommentHandler}
                    />
                    <Btn me onClick={onAddCommentBtnhandler}>
                        {' '}
                        add
                    </Btn>
                </StCommentLayout>
                {commentData.data?.map((item) => {
                    return (
                        <div key={item.id}>
                            <StCommentBox>
                                <StMiniLayout>
                                    <h3>{item.username}</h3>
                                </StMiniLayout>
                                <StCommentListBox>
                                    {showInput === item.id ? (
                                        <Input
                                            me
                                            type="text"
                                            value={editCmt}
                                            onChange={onEditCmt}
                                            placeholder="수정 내용을 입력해주세요"
                                            style={{ color: '#F38BA0', border: 'none' }}
                                        />
                                    ) : (
                                        <h4>{item.comment} </h4>
                                    )}
                                </StCommentListBox>
                                <StMiniLayout style={{ gap: '5px' }}>
                                    {showEdit === item.id ? (
                                        <Btn sm onClick={() => editButtonHandler(item.id)}>
                                            수정하기{' '}
                                        </Btn>
                                    ) : (
                                        <Btn
                                            sm
                                            onClick={() => {
                                                onShowInputHandler(item.id);
                                            }}
                                        >
                                            수정
                                        </Btn>
                                    )}

                                    {showCancel === item.id ? (
                                        <Btn
                                            sm
                                            onClick={cancelButtonHandler}
                                            style={{ backgroundColor: '#F38BA0' }}
                                        >
                                            취소
                                        </Btn>
                                    ) : (
                                        <Btn
                                            sm
                                            style={{ backgroundColor: '#F38BA0' }}
                                            onClick={() => {
                                                deleteButtonHandler(item.id);
                                            }}
                                        >
                                            삭제
                                        </Btn>
                                    )}
                                </StMiniLayout>
                            </StCommentBox>
                        </div>
                    );
                })}
            </StContaitner>
        </>
    );
}

export default Details;

//상세페이지 전체 컨테이너
export const StContaitner = styled.div`
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
