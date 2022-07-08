import styled from "styled-components";
import { evendarkerPurple, azureX11 } from "../../config/colors";

export const Nav = styled.nav`
    background-color: ${evendarkerPurple};
    padding: 20px;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    align-content: center;
    justify-content: right;

    a {
        color: ${azureX11};
        margin: 0 10px 0 0;
        font-weight: bold;
    }
`;