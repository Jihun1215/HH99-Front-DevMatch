import React from 'react';
import styled from 'styled-components';
export default function Footer() {
    return (
        <FooterArea>
            <p>© HH99 Mini Project | DevMatch | font by 한국저작권위원회   | All rights reserved</p>
        </FooterArea>
    );
}
const FooterArea = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #222831;
    width: 50rem;
    margin: 0 auto;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    opacity: 0.5;
    /* z-index: 2; */
    > p {
        font-size: 0.9375rem;
        color: #fff;
        margin: 0 auto;
        background: #222831;
    }
`;
