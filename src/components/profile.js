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

const FollowButton = styled(OrangeGradient)`
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

const StatsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    
    @media (${props => props.theme.screenQueries.tablet}) {
        justify-content: flex-start;
    } 
`;

const StatItemContainer = styled.div`
    text-align: center;
    
    @media (${props => props.theme.screenQueries.tablet}) {
        margin-right: 2rem;
        text-align: left;
    } 
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

const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 1.5rem;
    
    @media (${props => props.theme.screenQueries.tablet}) {
        flex-direction: row;
    } 
    @media (${props => props.theme.screenQueries.laptop}) {
        flex-direction: column;
        text-align: left;
        margin-bottom: revert;
    } 
`;

export const PersonalCategories = (props) => (
    <CategoriesContainer>
        {props.categories.map(category =>
        <CategoryLink href="#">
            <CategoryText key={category} style={{fontSize: '15pt'}}>{category}</CategoryText>
        </CategoryLink>
        )}
    </CategoriesContainer>
);