import React from 'react'
import styled from 'styled-components'


// 프로젝트 리스트 보여줄것들 
function List() {
    return (
        <ProjectList>

            {/* List 이미지 부분  */}
            <ProjectListImgBox>

            </ProjectListImgBox>


            {/* List Text 부분  */}
            <ProjectListTextBox>

                <ProjectListTextBoxTitle>
                    <h3>Project Title : </h3>
                </ProjectListTextBoxTitle>


                <ProjectListTextBoxBody>
                    <h3>Project Body 내용 </h3>
                    <p>모집인원정보 ? </p>
                </ProjectListTextBoxBody>


                <ProjectListInto>
                    <div>좋아요수</div>
                    <div>발행날짜</div>
                    <div>글쓴이</div>
                </ProjectListInto>


            </ProjectListTextBox>


        </ProjectList>
    )
}

export default List

const ProjectList = styled.div`
    width: 56.25rem;
    height: 15.625rem;
    border: 1px solid red;
    margin: 0 auto;
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
`;

const ProjectListTextBoxBody = styled.div`
    width: 90%;
    height: 50%;
    border: 1px solid red;
`;


const ProjectListInto = styled.div`
    width: 90%;
    height: 20%;
    border: 1px solid red;
    display: flex;
    align-content: center;
    justify-content: space-around;
`;


