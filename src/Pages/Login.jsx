import React, { useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../Components/Layout'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import LoginBg from '../Style/Img/LoginBg.jpeg'
import { FaLock, FaEnvelope } from 'react-icons/fa';
import Btn from '../Components/Button'
import Input from '../Components/Input'
import useInput from '../Hooks/useInput'
import { useNavigate } from 'react-router-dom'
// import LoginBg from '../Style/Img/LoginBg.jpeg'
import test from '../Style/Img/log.jpg'




function Login() {

  const navigate = useNavigate();
  const MoveToSignup = () => { navigate('/signup') }

  const [thisId, onChangeThisIdHandler, setThisId] = useInput();
  const [thisPw, onChangeThisPwHandler, setThisPw] = useInput();



  const onSumibtLogin = (e) => {
    e.preventDefault()
    // 서버로 아이디 비밀번호 보내고 체크 후 성공이나 실패를 보여준다 
    alert(thisId, thisPw)
    setThisId('');
    setThisPw('');

  }
  // // 스크롤 방지
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, []);

  return (
    <LoginContainer Imgurl={test}>
      <Header />
      {/* <img src={LoginBg} /> */}
      <LoginModalContainer>

        <LoginModal onSubmit={onSumibtLogin}>
          <h2>로그인</h2>


          <LoginModalInputBox>
            <Input
              type="text"
              value={thisId}
              onChange={onChangeThisIdHandler}
              required />
            <label>ID: </label>
            <div>  <FaEnvelope /></div>
          </LoginModalInputBox>


          <LoginModalInputBox>
            <Input
              type="password"
              value={thisPw}
              onChange={onChangeThisPwHandler}
              required />
            <label>PassWord: </label>
            <div><FaLock /></div>
          </LoginModalInputBox>



          <LoginModalButtontBox>
            <Btn loginbtn
              type="submit">로그인</Btn>
          </LoginModalButtontBox>


          <LoginmodalGoToSignup>

            <p> DevMatch아이디만들사람 <LoginmodalGoToSignupSpan onClick={MoveToSignup}>가입하기</LoginmodalGoToSignupSpan> </p>

          </LoginmodalGoToSignup>


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
  overflow: none;
  background: url(${(props) => props.Imgurl});
  background-position: center;
  background-size: cover; 
  /* > img {
    width: 100%;
    height: 100%;
  object-fit: cover;
  } */
  
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
  display: flex;
  align-items: center;
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 20px;
    /* backdrop-filter: blur(10px); */
  display: flex;


  > h2  {
    font-size: 2rem;
    color: #fff;
    text-align: center;
  }
`;

const LoginModalInputBox = styled.div`
  position: relative;
  margin: 30px 0;
  width: 19.375rem;
  border-bottom: 2px solid #fff;
 
  > label {
    position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1.1em;
  pointer-events: none;
  font-weight: 700;
  transition: all 0.25s ease-in-out;
  
  }
  > input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding:0 35px 0 5px;
    color: #000;
    padding-left: 1.25rem;
  };
  > input:focus ~ label{
    top: -5px;
  };
  > input:valid ~ label {
    top: -5px;
  }
  > div {
    position: absolute;
    right: 8px;
    color: #fff;
    font-size: 1.2em;
    top: 20px;
  }
`;
const LoginModalButtontBox = styled.div`
      width: 70%;
      height: 20%;
      
      display: flex;
      align-items: center;
      justify-content: center;
`
const LoginmodalGoToSignup = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: right;
    color: #fff;
    font-weight: 500;
   
`;

const LoginmodalGoToSignupSpan = styled.span`
  border-radius: 1.25rem;
  padding: 5px 16px;
  background: #edf2ff;
  color: #000;
  
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

