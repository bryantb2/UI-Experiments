import styled, { css } from 'styled-components';
import React from 'react';
import { MessageAlt } from '@styled-icons/boxicons-solid';
import { Dribbble, Twitter } from '@styled-icons/boxicons-logos';

const MediaIconBubble = styled.a(
    props => css`
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        height: 85px;
        width: 85px;
        border-radius: 50%;
        @media (${props.theme.screenQueries.laptop}) {
            height: 60px;
            width: 60px;
        }
    `);

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
    justify-content: center;
    height: 15px;
    width: 100%;
    font-family: 'Piers-Regular';
    color: lightgrey;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const UnstyledInput = styled.input`
    width: 90%;
    border: none;
    font-family: inherit;
    color: inherit;
    
`;