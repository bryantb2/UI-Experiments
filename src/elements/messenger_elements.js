import styled from 'styled-components';
import React from 'react';
import { MessageAlt } from '@styled-icons/boxicons-solid';
import { Dribbble, Twitter } from '@styled-icons/boxicons-logos';

const MediaIconBubble = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 60px;
    width: 60px;
    border-radius: 50%;
    @media (max-width: 1080px) {
        height: 85px;
        width: 85px;
    }
`;

const StyledMsgIcon = styled(MessageAlt)`
    color: grey;
    width: 40%;
`;

const StyledDrblIcon = styled(Dribbble)`
    color: red;
    width: 40%;
`;

const StyledTwtrIcon = styled(Twitter)`
    color: blue;
    width: 40%;
`;

export const MessageIconBubble = props => (
    <MediaIconBubble>
        <StyledMsgIcon />
    </MediaIconBubble>
);

export const DribbbleIconBubble = props => (
    <MediaIconBubble>
        <StyledDrblIcon />
    </MediaIconBubble>
);

export const TwitterIconBubble = props => (
    <MediaIconBubble>
        <StyledTwtrIcon />
    </MediaIconBubble>
);

export const ClockHeader = styled.h1`
    font-family: 'Piers-Regular';
    font-size: 30pt;
    color: black;
`;

export const MessageTextBubble = styled.div`
    display: flex;
    align-items: center;
    height: 15px;
    width: 100%;
    font-family: 'Piers-Regular';
    color: lightgrey;
    white-space: nowrap;
    padding: 0.7rem 1rem;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;