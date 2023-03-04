import styled, { css } from "styled-components";

export default function Btn(props) {
  return <DefailtButton {...props}>{props.children}</DefailtButton>;
}



const DefailtButton = styled.button`
  width: 3rem;
  height: 2rem;
  border-radius: .625rem;
  border: none;
  outline: none;
  background: #5c7cfa;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.sm &&
    css`   

        width: 4.6875rem;
        height: 1.875rem;
    `};
    
    ${(props) =>
    props.me &&
    css`
     width: 6.25rem;
     height: 2.1875rem;
     
     background-color: #6a75ca;
     color: white;
     text-align: center;
     border-radius: .625rem;
    `};
    ${(props) =>
    props.lg &&
    css`
      
     width: 9.375rem;
     height: 2.5rem;
     
     background-color: #6a75ca;
     color: white;
     text-align: center;
     border-radius: .625rem;
    `};
    ${(props) =>
    props.lgred &&
    css`
      
     width: 9.375rem;
     height: 2.5rem;
     
     background-color: #ff6b6b;
     color: white;
     text-align: center;
     border-radius: .625rem;
    `};


    ${(props) =>
    props.sideBtn &&
    css`   
        border-radius: 100%;
        width: 3.5rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-family: 800;
        background: white;
        color: #000;
        border: none;
    `};
    ${(props) =>
    props.loginbtn &&
    css`   
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5rem;
        height: 3.125rem;
        font-size: 1.5rem;
        font-family: 800;
        background: transparent;
        border: 1px solid black
    `};
    ${(props) =>
    props.home &&
    css`   
        
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5rem;
        height: 3.125rem;
        font-size: 1.5rem;
        font-family: 800;
        background: #edf2ff;
        color: #000;
        
    `};


    &:hover {
    cursor: pointer;
    transition: 0.2s ease;
  }
  &:active {
    filter: brightness(50%);
  }
`;

