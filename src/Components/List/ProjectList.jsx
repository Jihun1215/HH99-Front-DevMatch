import React, { useState } from 'react'
import { ListArea } from '../../Style/MainpageStyle'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// 프로젝트 리스트 보여줄것들 
function ProjectList({ isLoading, data }) {
    const ListView = data
    const getToken = Cookies.get('token');

    // console.log(ListView)

    //  상세페이지 만들기 위해
    const navigate = useNavigate();
    const onClickDeatilPage = (id) => {
        navigate(`/project/${id}`)
    }


    // 페이지네이션을 만들기 위한 로직 
    return (
        <ListArea>


            <div style={{ textAlign: "center", padding: "20px", }}>
                <h2>PROJECT LIST </h2>



                {isLoading === false && (

                    ListView?.map((item) => {
                        // console.log(item)
                        return (
                            <ProjectListArea key={item.id}>

                                {/* List 이미지 부분  */}
                                <ProjectListImgBox>
                                    <img src={item.imageUrl} />
                                </ProjectListImgBox>

                                <ProjectListTextBox>

                                    <ProjectListTextBoxTitle>
                                        <h3>Project Title : {item.title}</h3>
                                    </ProjectListTextBoxTitle>


                                    <ProjectListTextBoxBody>
                                        <h3>Project Body : {item.content} </h3>
                                        <h5>모집인원정보
                                            <p style={{ padding: "5px", fontWeight: "800", }}>백엔드:  <span>{item.backEndMember}</span></p>
                                            <p style={{ padding: "5px", fontWeight: "800" }}>프론트엔드: <span>{item.frontEndMember}</span> </p>
                                        </h5>
                                    </ProjectListTextBoxBody>

                                    <ProjectListInto>
                                        <div>LIKE❤️: {item.likeCount}</div>
                                        <div>작성자 : {item.username}</div>
                                        <GoToDeatil onClick={() => { onClickDeatilPage(item.id) }}>상세보기</GoToDeatil>
                                    </ProjectListInto>

                                </ProjectListTextBox>


                            </ProjectListArea >
                        )
                    })
                )}



            </div>


        </ListArea>
    )
}

export default ProjectList

const ProjectListArea = styled.div`
            width: 56.25rem;
            height: 15.625rem;
            border-radius: 1.5625rem;
            margin: 4.5rem auto;
            background-color: rgba(255,255,192,0.1);
            backdrop-filter: contrast(80%);
            box-shadow: 2px 7px 15px 8px rgba(0,0,0,0.3);
            border-radius: 1.5625rem;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 0 1.25rem;
            background: #bac8ff;
            `;






const ProjectListImgBox = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25%;
            height: 90%;
            background: #edf2ff;
            > img {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 99%;
            height: 99%;
             };
            `;

const ProjectListTextBox = styled.div`
            display: flex;
            align-items: center;
            /* justify-content: center; */
            flex-direction: column;
            padding: .625rem;
            width: 65%;
            height: 90%;
            border-radius: 1.5625rem;
            gap: 10px 0;
            `;

const ProjectListTextBoxTitle = styled.div`
            width: 90%;
            height: 20%;
            background: #edf2ff;
            border-radius: 1.5625rem;
            padding-left: 1.25rem;
            display: flex;
            align-items: center;
            `;

const ProjectListTextBoxBody = styled.div`
            width: 90%;
            height: 60%;
            background: #edf2ff;
            border-radius: 1.5625rem;
            text-align: left;
            flex-direction: column;
            padding: 10px;
            > h3 {
             width: 95%;
             height: 80%;
             margin: 0 auto;
            };
            > h5{
             width: 90%;
             height: 20%;
             margin: 0 auto;
             display: flex;
             align-items: center;
             
            }
            `;


const ProjectListInto = styled.div`
            width: 90%;
            height: 20%;
            background: #edf2ff;
            border-radius: 1.5625rem;
            display: flex;
            align-items: center;
            justify-content: space-around;

            `;


const GoToDeatil = styled.div`
            color: #000;
            font-weight: 800;
            text-decoration: none;
            &:focus {
            top: 10px;
            cursor: pointer;
            transition:all 1s ease;
            }
            &:active {
            filter: brightness(50%);
            }
 `;