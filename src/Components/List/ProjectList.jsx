import React, { useState } from 'react'
import { ListArea } from '../../Style/MainpageStyle'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// 프로젝트 리스트 보여줄것들 
function ProjectList(data) {
    const ListView = data.data
    console.log(ListView)
    const getToken = Cookies.get('token');
    // const [data, setData] = useState([...]); // 전체 데이터

    // 가서 전체 데이터 비교하기 
    const DetailProjectGoTo = () => {

    }

    // 페이지네이션을 만들기 위한 로직 


    return (
        <ListArea>

            {
                getToken === undefined ? (
                    // 토큰이 없을시 보여줄것들 
                    <div>
                        {
                            ListView?.map((item) => {
                                return (
                                    <ProjectListArea2 key={item.id}>
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
                                                <p>모집인원정보 :{item.backEndMember}
                                                    {item.frontEndMember}</p>
                                            </ProjectListTextBoxBody>

                                            <ProjectListInto>
                                                <div>좋아요수: {item.likeCount}</div>
                                                <div>작성자 : {item.username}</div>
                                            </ProjectListInto>

                                        </ProjectListTextBox>

                                    </ProjectListArea2>
                                )
                            })
                        }


                    </div>
                )
                    :
                    (
                        // 토큰이 잇을시 보여줄 것들
                        <div style={{ textAlign: "center", padding: "20px", }}>
                            <h2>PROJECT LIST </h2>

                            {
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
                            }



                        </div>
                    )
            }


        </ListArea>
    )
}

export default ProjectList

const ProjectListArea = styled.div`
    width: 56.25rem;
    height: 15.625rem;
    border: 1px solid red;
    margin: 1.5625rem auto;
    border-radius: 1.5625rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0 1.25rem;
`;






const ProjectListImgBox = styled.div`
    width: 25%;
    height: 90%;
    border: 1px solid red;
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
    border: 1px solid red;
    gap: 10px 0;
`;



const ProjectListTextBoxTitle = styled.div`
    width: 80%;
    height: 20%;
    border: 1px solid red;
    display: flex;
    align-items: center;
`;

const ProjectListTextBoxBody = styled.div`
    width: 90%;
    height: 50%;
    border: 1px solid red;
    display: flex;
    padding: 15px;
`;


const ProjectListInto = styled.div`
    width: 90%;
    height: 20%;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
`;
const ProjectListArea2 = styled.div`
    position: relative;
    width: 56.25rem;
    height: 15.625rem;
    border: 1px solid red;
    margin: 1.5625rem auto;
    border-radius: 1.5625rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0 1.25rem;
    opacity: 0.2;
`;

const GoToDeatil = styled(Link)`
    color: #000;
    text-decoration: none;
`