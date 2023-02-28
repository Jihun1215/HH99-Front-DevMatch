import React from 'react'
import styled from 'styled-components'
import { ListArea } from '../../Style/MainpageStyle'
import Cookies from 'js-cookie'


//   {/* 쿠키가 있으면 블러 처리 안하고 보여주고 있으면 블러 처리하고 리스트 보여주기 */}
//   {getToken === undefined ? (
//     // 쿠키 없을떄 보여줄 것들
//     <ListArea
//         style={{
//             textAlign: 'center',
//         }}
//     >
//         <h2>토큰없음 </h2>
//         <List data={data} />
//     </ListArea>
// )
//     :
//     (
//         // 쿠키가 있을때 보여줄 것들
//         <ListArea
//             style={{
//                 textAlign: 'center',
//             }}
//         >
//             <h2>토큰 있음</h2>

//         </ListArea>
//     )}


// 프로젝트 리스트 보여줄것들 
function List(data) {
    console.log(data.data)
    const getToken = Cookies.get('token');
    return (
        <ListArea>
            {
                getToken === undefined ? (
                    // 토큰이 없을시 보여줄것들 
                    <div>
                        1
                    </div>
                )
                    :
                    (
                        // 토큰이 잇을시 보여줄 것들
                        <div>
                            로그인중 !!!
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
                        </div>
                    )
            }


        </ListArea>
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


