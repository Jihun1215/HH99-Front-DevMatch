import styled, { css } from "styled-components";

export default function Input(props) {
  //{...props}는 props 가져와 css작업 {props.children} 안에 글자 표시
  return <DefailtInput {...props}>{props.children}</DefailtInput>;
}



const DefailtInput = styled.input`
    width: 12.5rem;
    height: 2.5rem;
    border-radius: .625rem;
    outline: none;
    border: 1px solid black;
    padding-left: 1.25rem;

  ${(props) =>
    props.sm &&
    css`   
        width: 15.625rem
        height: 3.125rem
    `};
    
    ${(props) =>
    props.me &&
    css`
      
     width: 21.875rem;
     height: 3.125rem;
    `};
    ${(props) =>
    props.lg &&
    css`
     width: 31.25rem;
     height: 15.625rem;
     
    `};
    ${(props) =>
    props.loginput &&
    css`   
        width: 25rem;
        height: 3.75rem;
    `};
    ${(props) =>
    props.addform &&
    css`   
        width: 25rem;
        height: 3.75rem;
    `};


    &:hover {
    cursor: pointer;
    transition: 0.2s ease;
  }
`;

