import styled from 'styled-components';

export const RoundedImage = styled.img`
    object-fit: cover;
    border-radius: 50%;
`;

export const ProfileFollowCount = styled.div`
    background-color: white;
    color: black;
    z-index: 101;
    border-radius: 15px;
    padding: 0.4rem 0.75rem;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: 'Piers-Regular';
    font-size: 10pt;
`;

export const TagBox = styled.div`
    height: 15px;
    padding: 1rem 2rem;
    color: white;
    background-color: ${props => props.color}
    border-radius: 15px;
`;

export const WebLink = styled.a`
    color: rgba(255,3,84,1);
`;

export const LineDivider = styled.hr`
    border-color: light-grey;
    width: 75%;
    margin-left: 0;
    margin-bottom: 2rem;
`;

export const ProfileColors = [
    '#4DA6FF',
    '#FE60E1',
    '#37BA98',
    '#2F4858',
    '#ff0354',
    '#ffab00'
];