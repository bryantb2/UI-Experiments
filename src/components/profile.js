import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import {
    ProfileImage,
    BlackThinHeader,
    BlackBoldTextLarge,
    GreyThinTextSmall,
    OrangeGradient,
    BlackThinTextSmall
} from '../elements';

// todo: optimizing for laptop and desktop screens
const UserProfileContainer = styled.div(
    props => css`
        margin-bottom: 1.5rem;
        @media (${props.theme.screenQueries.mobileM}) {
            display: flex;
        }
        @media (${props.theme.screenQueries.tablet}) {
            display: revert;
        } 
    `);

const ProfileInfo = styled.div(
    props => css`
        @media (${props.theme.screenQueries.mobileM}) {
            margin-left: 1.25rem;
            flex-grow: 2;
        }
        @media (${props.theme.screenQueries.tablet}) {
            margin: revert;
            flex-grow: revert;
        }
    `);

const UserName = styled(BlackThinHeader)`
    @media (${props => props.theme.screenQueries.mobileM}) {
        margin: 0;
    }
    @media (${props => props.theme.screenQueries.tablet}) {
        margin: revert;
    } 
`;

const UserBio = styled(BlackThinTextSmall)`
    @media (${props => props.theme.screenQueries.mobileM}) {
        margin: 0.4rem 0rem 1.2rem 0rem;
    }
    @media (${props => props.theme.screenQueries.tablet}) {
        margin: revert;
    } 
`;

export const UserProfile = (props) => (
    <UserProfileContainer>
        <ProfileImage src={props.image} />
        <ProfileInfo>
            <UserName>{props.name}</UserName>
            <UserBio>{props.bioTitle}</UserBio>
            <OrangeGradient>Follow</OrangeGradient>
        </ProfileInfo>
    </UserProfileContainer>
);

const StatsContainer = styled.div`
    display: flex;
    margin-bottom: 2rem;
    @media (${props => props.theme.screenQueries.mobileM}) {
        justify-content: space-between;
    }
    @media (${props => props.theme.screenQueries.tablet}) {
        justify-content: revert;
    } 
`;

const StatItemContainer = styled.div`
    width: 25%;
`;

export const ProfileStats = (props) => (
    <StatsContainer>
        <StatItemContainer>
            <BlackBoldTextLarge>{props.collectionCount}</BlackBoldTextLarge>
            <GreyThinTextSmall>Collections</GreyThinTextSmall>
        </StatItemContainer>
        <StatItemContainer>
            <BlackBoldTextLarge>{props.followCount}</BlackBoldTextLarge>
            <GreyThinTextSmall>Followers</GreyThinTextSmall>
        </StatItemContainer>
        <StatItemContainer>
            <BlackBoldTextLarge>
            {
                props.likeCount >= 1000 ? (props.likeCount / 1000).toFixed(2) :
                props.likeCount
            }k
            </BlackBoldTextLarge>
            <GreyThinTextSmall>Likes</GreyThinTextSmall>
        </StatItemContainer>
    </StatsContainer>
);

const CategoryLink = styled.a`
    text-decoration: none;
`;

const TextAnimation = keyframes`
    0% { font-size: 15pt; }
    100% { font-size: 20pt; color: black; }
`;

const CategoryText = styled(GreyThinTextSmall)`
    margin: 0;
    padding: 0.75rem;
    padding-left: 0;
    &:hover {
        animation-name: ${TextAnimation};
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }
`;

export const PersonalCategories = (props) => props.categories.map(category =>
    <CategoryLink href="#">
        <CategoryText key={category} style={{fontSize: '15pt'}}>{category}</CategoryText>
    </CategoryLink>
);
