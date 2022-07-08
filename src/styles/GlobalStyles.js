import styled, { createGlobalStyle } from "styled-components";
import { purpleNavy, darkerPurple } from "../config/colors";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Comic Sans MS", "Comic Sans", cursive;
        background-color: ${purpleNavy};
    }

    html, border-style, #root{
        height: 100%;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
`;

export const Container = styled.section`
    max-width: 75%;
    background-color: ${darkerPurple};
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    @media only screen and (min-width: 1700px){
        max-width: 50%;
    }
`

export const Container2 = styled.section`
    max-width: 75%;
    background-color: ${darkerPurple};
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    @media only screen and (min-width: 1700px){
        max-width: 75%;
    }

`
