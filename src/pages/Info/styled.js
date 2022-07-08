import styled from 'styled-components';
import { azureX11, lavender, bluePurple } from '../../config/colors';

export const Title = styled.h1`
    color: ${ props => props.isWhite ? azureX11 : bluePurple };
    font-size: 1.7em;
    p {
        font-size: 0.6em;
        color: ${bluePurple}
    }
`;

export const FlexHor = styled.div`
    display: flex;
    justify-content: space-between;
    margin:2em;
    gap: 5%;
    flex-direction: row;
    text-align: center;
`

export const FlexHSkills = styled.div`
    display: flex;
    justify-content: space-between;
    margin:2em;
    gap: 5%;
    width: 100%;
    flex-direction: row;
    div{
        justify-content: center;    
    }
`

export const TextoImg = styled.img`
    height: 1.5em;
    width: auto;
    vertical-align: middle;
    margin-left: 1rem;
`

export const ImgResponse = styled.img`
    height: auto;
    max-width: 80%;
    width: auto;
    text-align: center;
`

export const FlexVer = styled.div`
    display: flex;
    justify-content: space-between;
    margin:2em;
    gap: 10%;
    flex-direction: column;
    text-align: center;
    align-items: center;
    h1{
        color: ${lavender};
    }
    h4{
        color: ${bluePurple};
    }
`