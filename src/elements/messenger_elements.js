import styled from 'styled-components';
import React from 'react';
import { Message, MessageSquare } from '@styled-icons/boxicons-solid';
import { Dribbble, Twitter } from '@styled-icons/boxicons-logos';

const MediaIconBubble = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 25px;
    width: 25px;
    border-radius: 50%;
`;

const StyledMsgIcon = styled(MessageSquare)`
    color: grey;
    width: 25%;
`;

const StyledDrblIcon = styled(Dribbble)`
    color: red;
    width: 25%;
`;

const StyledTwtrIcon = styled(Twitter)`
    color: light-blue;
    width: 25%;
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

export const MessageTextBubble = styled(Message)`
    height: 12px;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white;
`;