import React from 'react'
import styled from 'styled-components'
import Layout from '../Components/Layout'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import LoginBg from '../Style/Img/LoginBg.jpeg'
import { FaLock, FaUser } from 'react-icons/fa';
function Login() {
  return (
    <LoginContainer>
      <LoginModalContainer>

        <LoginModal>
          <h2>LogIn</h2>

          <div>
            <FaLock />
            <FaUser />
            아이콘
            input
            label
          </div>

          <div>버튼 들어갈 자리</div>

          회원가입하럭가기

        </LoginModal>

      </LoginModalContainer>

      <Footer />
    </LoginContainer>

  )
}

export default Login

const LoginContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: url("https://raw.githubusercontent.com/Hashtechieofficial/Form-/main/background6.jpg") no-repeat; 
  background-position: center;
  background-size: cover;

`;

const LoginModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 100;
`;

const LoginModal = styled.form`
  position: relative;
  flex-direction: column;
  padding: 3rem;
  border-radius: 1.25rem;
  width: 34.375rem;
  height: 31.25rem;
  border: 1px solid red;
  > h2  {
    font-size: 2rem;
    color: #fff;
    text-align: center;
  }
`;

const LoginModalInputBox = styled.div`
  
`


// const LoginContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-image: url("https://raw.githubusercontent.com/Hashtechieofficial/Form-/main/background6.jpg");
// `;

// const LoginArea = styled.div`
//   margin-top: 3.125rem;
//   width: 31.25rem;
//   height: 34.375rem;
//   border: 1px solid red;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const LoginForm = styled.form`
//    width: 90%;
//    height: 95%;
//    border: 1px solid black;
// `

