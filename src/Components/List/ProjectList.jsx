import React, { useState } from 'react'
import { ListArea } from '../../Style/MainpageStyle'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// 프로젝트 리스트 보여줄것들 
function ProjectList({ isLoading, data }) {
    const ListView = data
    // console.log(ListView)
    const getToken = Cookies.get('token');
    // const [data, setData] = useState([...]); // 전체 데이터
    {/* {projectDate.isLoading == false && (

                         )} */}
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
                                        <p>모집인원정보
                                            Back:  {item.backEndMember}
                                            Front:  {item.frontEndMember} </p>
                                    </ProjectListTextBoxBody>

                                    <ProjectListInto>
                                        <div>좋아요수: {item.likeCount}</div>
                                        <div>작성자 : {item.username}</div>
                                        <GoToDeatil to={`/project/${item.id}`}>상세보기</GoToDeatil>
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
            margin: 1.5625rem auto;
            background-color: rgba(255,255,192,0.1);
            backdrop-filter: contrast(80%);

            box-shadow: 2px 7px 15px 8px rgba(0,0,0,0.3);
            border-radius: 1.5625rem;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 0 1.25rem;
            `;






const ProjectListImgBox = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25%;
            height: 90%;
            border: 1px solid #000;
    > img {
                display: flex;
            align-items: center;
            justify-content: center;
            width: 95%;
            height: 95%;
       
    }
            `;

const ProjectListTextBox = styled.div`
            display: flex;
            align-items: center;
            /* justify-content: center; */
            flex-direction: column;
            padding: .625rem;
            width: 65%;
            height: 90%;
            border: 2px solid  #5c7cfa;
            border-radius: 1.5625rem;
            gap: 10px 0;
            `;

const ProjectListTextBoxTitle = styled.div`
            width: 90%;
            height: 20%;
            border: 1px solid #000;
            border-radius: 1.5625rem;
            padding-left: 1.25rem;
            display: flex;
            align-items: center;
            `;

const ProjectListTextBoxBody = styled.div`
            width: 90%;
            height: 50%;
            border: 1px solid #000;
            border-radius: 1.5625rem;
            display: flex;
            padding: 15px;
            `;


const ProjectListInto = styled.div`
            width: 90%;
            height: 20%;
            border: 1px solid #000;
            border-radius: 1.5625rem;
            display: flex;
            align-items: center;
            justify-content: space-around;

            `;


const GoToDeatil = styled(Link)`
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