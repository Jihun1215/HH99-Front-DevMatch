import React from 'react';
import styled from 'styled-components';
import { StContaitner } from '../Detail/Details';
import Input from '../Components/Input';
import Btn from '../Components/Button';

function Mypages() {
    return (
        <div>
            <StContaitner>
                <StInfoLayout>
                    <StInfoBox>ID</StInfoBox>
                    test1234
                </StInfoLayout>
                <StInfoLayout>
                    <StInfoBox>NickName</StInfoBox>{' '}
                    <Input type="text" style={{ marginRight: '20px' }} me />
                    <Btn me>변경</Btn>
                </StInfoLayout>

                <StInfoLayout>
                    <StInfoBox>Stack</StInfoBox> <input type="select" />
                </StInfoLayout>
                <StInfoLayout>
                    {' '}
                    <StInfoBox>Introduce</StInfoBox>{' '}
                </StInfoLayout>
            </StContaitner>
        </div>
    );
}

export default Mypages;

const StInfoLayout = styled.div`
    width: 36.875rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 5px;
    margin-bottom: 20px;
`;

const StInfoBox = styled.div`
    width: 110px;
    height: 50px;
    border-radius: 5px;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 20px;
`;
