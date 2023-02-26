import styled from "styled-components";


// 모달 componet 
export const ModalOutArea = styled.div`
    display: ${(props) => props.isOpen};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
`;

export const ModalInArea = styled.div`
    display: ${(props) => props.isOpen};
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background-color: ${(props) => props.color};
    width: 68.75rem;
    height: 46.875rem;
    background-color: #edf2ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;