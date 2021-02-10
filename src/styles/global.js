import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root {
    min-height: 100%;
    /* border: 1px solid purple; */
}

body{
    background: whitesmoke;
}
`;
