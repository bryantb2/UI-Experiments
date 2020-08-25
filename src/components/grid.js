import styled, { css } from 'styled-components';

export const GutterGrid = styled.div`
    display: flex;
    width: 90%;
    margin-top: 3rem;
    margin-left: auto; 
    margin-right: auto;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const NoGutterGrid = styled.div`
    display: flex;
    margin: 0;
    flex-wrap: wrap;
    justify-content: space-between;
`;

// thirds system
export const OneThirdCol = styled.div`
    width: 32%;
`;

export const TwoThirdCol = styled.div`
    width: 64%;
`;

export const OneFifthCol = styled.div(
    props => css`
        width: 20%;
        @media (${props.theme.screenQueries.mobileS}) {
            width: 100%;
        }
        @media (${props.theme.screenQueries.tablet}) {
            width: 20%;
        }
    `);

export const FourFifthsCol = styled.div(
    props => css`
        width: 80%;
        @media (${props.theme.screenQueries.mobileS}) {
            width: 100%;
        }
        @media (${props.theme.screenQueries.tablet}) {
            width: 80%;
        }
    `);
