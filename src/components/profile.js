import React from 'react';
import styled from 'styled-components';
import {
    RoundedImage,
    BlackThinHeader,
    BlackBoldTextLarge,
    GreyThinTextSmall,
    OrangeGradient,
    BlackThinTextSmall
} from '../elements';

const UserProfileContainer = styled.div`
    margin-bottom: 1.5rem;
`;

const StatsContainer = styled.div`
    display: flex;
    margin-bottom: 2rem;
`;

const StatItemContainer = styled.div`
    width: 25%;
`;

export const UserProfile = (props) => (
    <UserProfileContainer>
        <RoundedImage
            src={props.image}
            width="200px"
        />
        <BlackThinHeader>{props.name}</BlackThinHeader>
        <BlackThinTextSmall>{props.bioTitle}</BlackThinTextSmall>
        <OrangeGradient>Follow</OrangeGradient>
    </UserProfileContainer>
);

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

export const PersonalCategories = (props) => props.categories.map(category =>
    <GreyThinTextSmall key={category} style={{fontSize: '15pt'}}>{category}</GreyThinTextSmall>
);
