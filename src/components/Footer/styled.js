import styled from "styled-components";
import { lavender, evendarkerPurple } from '../../config/colors'


export const Nav = styled.nav`
    background: ${ evendarkerPurple };
    bottom: 0;
    left: 0;
    padding: 20px;
    display: flex;
    align-content: center;
    justify-content: left;
    width: 100%;
    gap: 10%;

    h2{
        color: ${lavender}
    }

    p{
        color: ${lavender}
    }
`;