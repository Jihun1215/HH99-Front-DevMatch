import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @font-face {
    font-family: 'KCCChassam';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCCChassam.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
font-family: 'KCCChassam';
 }

 
`;

export default GlobalStyle;