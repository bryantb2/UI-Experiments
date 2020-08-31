import React from 'react';
import styled, { css } from 'styled-components';
import {
    ProfileImage,
    BlackThinHeader,
    OrangeButton,
    BlackThinTextSmall
} from '../elements';

const UserProfileContainer = styled.div(
    props => css`
        margin-bottom: 1.5rem;
        @media (${props.theme.screenQueries.mobileM}) {
            display: flex;
            align-items: center;
        }
        @media (${props.theme.screenQueries.laptop}) {
            flex-direction: column;
            align-items: revert;
        } 
    `);

const ProfileInfo = styled.div(
    props => css`
        @media (${props.theme.screenQueries.mobileS}) {
            display: flex;
            flex-direction: column;
        }
        @media (${props.theme.screenQueries.mobileM}) {
            margin-left: 0.75rem;
            flex-grow: 2;
        }
        @media (${props.theme.screenQueries.tablet}) {
            margin: revert;
            flex-grow: revert;
        }
    `);

const UserName = styled(BlackThinHeader)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        margin: 0;
        text-align: center;
    }
    @media (${props => props.theme.screenQueries.mobileM}) {
        text-align: left;
    } 
    @media (${props => props.theme.screenQueries.laptop}) {
        margin: revert;
    } 
`;

const UserBio = styled(BlackThinTextSmall)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        text-align: center;
        margin-bottom: 1.5rem;
    }
    @media (${props => props.theme.screenQueries.mobileM}) {
        margin: 0.4rem 0rem 1.2rem 0rem;
        text-align: revert;
    }
    @media (${props => props.theme.screenQueries.tablet}) {
        margin-bottom: 3rem;
    } 
    @media (${props => props.theme.screenQueries.laptop}) {
        margin: 0 0 2rem 0;
    } 
`;

const FollowButton = styled(OrangeButton)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        display: block;
        width: 50%;
        margin-right: auto;
        margin-left: auto;
    }
    @media (${props => props.theme.screenQueries.mobileM}) {
        margin-right: revert;
        margin-left: revert;
    }
`;

const ScalableImage = styled(ProfileImage)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        width: 140px;
        height: 140px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
    }
    @media (${props => props.theme.screenQueries.mobileM}) {
        width: 130px;
        height: 130px;
        display: revert;
        margin-left: revert;
        margin-right: revert;
        margin-bottom: revert;
    }
    @media (${props => props.theme.screenQueries.mobileL}) {
        width: 150px;
        height: 150px;
    }
    @media (${props => props.theme.screenQueries.tablet}) {
        width: 200px;
        height: 200px;
        margin-right: 2rem;
    } 
`;

export const UserProfile = (props) => (
    <UserProfileContainer>
        <ScalableImage src={props.image} />
        <ProfileInfo>
            <UserName>{props.name}</UserName>
            <UserBio>{props.bioTitle}</UserBio>
            <FollowButton>Follow</FollowButton>
        </ProfileInfo>
    </UserProfileContainer>
);
