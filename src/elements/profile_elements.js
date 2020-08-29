import styled, { css } from 'styled-components';
import {ArrowIosForwardOutline} from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";
import React from "react";

export const ProfileImage = styled.img(
    props => css`
        object-fit: cover;
        border-radius: 50%;
        
        @media (${props.theme.screenQueries.mobileS}) {
            width: 140px;
            height: 140px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
        }
        @media (${props.theme.screenQueries.mobileM}) {
            width: 130px;
            height: 130px;
            display: revert;
            margin-left: revert;
            margin-right: revert;
            margin-bottom: revert;
        }
        @media (${props.theme.screenQueries.mobileL}) {
            width: 150px;
            height: 150px;
        }
        @media (${props.theme.screenQueries.tablet}) {
            width: 200px;
            height: 200px;
            margin-right: 2rem;
        } 
    `);

export const CollectionImage = styled.img`
    object-fit: cover;
    border-radius: 50%;
    width: 120px;
    height: 120px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15px;
    color: white;
    padding: 0.5rem 1rem;
    background-color: ${props => props.color};
    border-radius: 15px;
    font-family: 'Piers-Regular';
    color: white;
    white-space: nowrap;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
`;

export const TagArrow = styled(ArrowIosForwardOutline)`
    height: 1.5rem;
    margin-left: 0.5rem;
`;

export const WebLink = styled.a`
    font-family: 'Piers-Regular';
    color: rgba(255,3,84,1);
`;

export const LineDivider = styled.hr`
    border-color: light-grey;
    width: 75%;
    margin-left: 0;
    margin-bottom: 2rem;
    
    @media (${props => props.theme.screenQueries.mobileS}) {
        display: none;
    } 
`;

export const ProfileColors = [
    '#4DA6FF',
    '#FE60E1',
    '#37BA98',
    '#2F4858',
    '#ff0354',
    '#ffab00'
];