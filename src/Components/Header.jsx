import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderSize>Header</HeaderSize>
    )
}

export default Header

const HeaderSize = styled.div`
    width: 50rem;
    height: 5.625rem;
    border-bottom-left-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    border: 1px solid black;
    margin: 0 auto;
    background: #EDF2FF;
`