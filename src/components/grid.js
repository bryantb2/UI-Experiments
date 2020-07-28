import styled from 'styled-components';

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

export const OneFifthCol = styled.div`
    width: 20%;
`;

export const FourFifthsCol = styled.div`
    width: 80%;
`;
