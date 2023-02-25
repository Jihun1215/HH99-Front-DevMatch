import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../Components/Layout'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import LoginBg from '../Style/Img/LoginBg.jpeg'
import { FaLock, FaUser, FaEnvelope, FaCircle } from 'react-icons/fa';
import Btn from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import Input from '../Components/Input'
// import LoginBg from '../Style/Img/LoginBg.jpeg'
import test from '../Style/Img/log.jpg'




function Login() {

  const navigate = useNavigate();
  const MoveToLogin = () => { navigate('/login') }

  const [ninkName, setNickName] = useState('');
  const [username, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  // 오류 메세지
  const [nameMessage, setNameMessage] = useState('');
  const [idMessage, setIdMessage] = useState('');
  const [pwMessage, setPwMessage] = useState('');

  // 유효성검사 
  const [isninkName, setIsNinkName] = useState(false);
  const [isuserName, setIsUserName] = useState(false);
  const [ispassWord, setIsPassWord] = useState(false);


  // 닉네임 정규식 체크 
  const onChangeNinkName = (e) => {
    setNickName(e.target.value);

    const NinkNameReExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,6}$/;
    if (!NinkNameReExp.test(e.target.value)) {
      setNameMessage('영문이나 한글로 2 ~ 6자로 입력해주세요');
      setIsNinkName(false);
    } else {
      setNameMessage('사용 가능한 닉네임입니다');
      setIsNinkName(true);
    }
  }





  // 아이디 정규식 체크 
  const onChangeUserNameHandler = (e) => {
    setUserName(e.target.value);
    const IdReExp = /^(?=.*[a-z0-9])[a-z0-9]{5,11}$/;
    if (!IdReExp.test(e.target.value)) {
      setIdMessage('영문이나 숫자로 6 ~ 10자로 입력해주세요');
      setIsUserName(false);
    } else {
      setIdMessage('사용 가능한 아이디 입니다.');
      setIsUserName(true);
    }
  }
  // 비밀번호 정규식 체크 
  const onChangePassWordHandler = (e) => {
    setPassWord(e.target.value)
    const PwReExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/;
    if (!PwReExp.test(e.target.value)) {
      setPwMessage('영문과 숫자 조합으로 8 ~ 12자로 입력해주세요')
      setIsPassWord(false);
    } else {
      setPwMessage('사용 가능한 비밀번호 입니다.');
      setIsPassWord(true);
    }
  }


  const onSumibtLogin = (e) => {
    e.preventDefault()

    if (isninkName === true && isuserName === true && ispassWord === true) {
      // 서버로 아이디 비밀번호 보내고 체크 후 성공이나 실패를 보여준다 
      alert(ninkName, username, passWord)

    }

    else {
      alert('조건에 맞는 값을 입력해주세요!')
    }


    setNickName('');
    setUserName('');
    setPassWord('');

  }

  return (
    <LoginContainer Imgurl={test}>
      <Header />
      <LoginModalContainer>

        <LoginModal onSubmit={onSumibtLogin}>
          <h2>회원가입</h2>

          <LoginModalInputBox>

            <Input
              type="text"
              value={ninkName}
              onChange={onChangeNinkName}
              required />
            <label>NickName: </label>
            <div>  <FaUser /></div>
            <p>
              {nameMessage}
              {/* <FaCircle /> */}
            </p>

          </LoginModalInputBox>


          <LoginModalInputBox>
            <Input
              type="text"
              value={username}
              onChange={onChangeUserNameHandler}
              required />
            <label>ID: </label>
            <div>  <FaEnvelope /></div>
            <p>{idMessage}</p>

          </LoginModalInputBox>



          <LoginModalInputBox>
            <Input
              type="password"
              value={passWord}
              onChange={onChangePassWordHandler}
              required />
            <label>PassWord: </label>
            <div><FaLock /></div>
            <p>{pwMessage}</p>

          </LoginModalInputBox>



          <LoginModalButtontBox>
            <Btn loginbtn
              type="submit">회원가입</Btn>
          </LoginModalButtontBox>


          <LoginmodalGoToSignup>

            <p> DevMatch 회원이신가 ?<LoginmodalGoToSignupSpan onClick={MoveToLogin}>로그인하러가기</LoginmodalGoToSignupSpan> </p>

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
  height: 37.5rem;
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
  };
  > p {
    color: #45f3ff;
    position: absolute;
    top: 60px;
    width: 18.75rem;
    text-align: center;
    /* border: 1px solid red; */
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


