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

export const OneThirdColMarg = styled.div`
    width: 32%;
    margin-bottom; 2rem;
`;

export const OneThirdCol = styled.div`
    width: 32%;
`;

export const TwoThirdColMarg = styled.div`
    width: 64%;
    margin-bottom; 2rem;
`;

export const TwoThirdCol = styled.div`
    width: 64%;
`;