import React from 'react';
import styled from 'styled-components';
import {
    RoundedImage,
    BlackThinHeader,
    BlackBoldTextSmall,
    BlackBoldTextLarge,
    GreyThinTextSmall,
    OrangeGradient,
    BlackThinTextSmall,
    GreyBoldSubHeader,
    TagBox,
    WebLink,
    ProfileColors
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

export const PersonalCategories = (props) => {
    const categories =
        ['Collections', 'Team', 'Work in Progress', 'Blog', 'Archives'].map(categoryName =>
            <GreyThinTextSmall style={{fontSize: '15pt'}}>{categoryName}</GreyThinTextSmall>
    );
    return (<>{categories}</>);
};

export const Biography = (props) => (
    <>
        <GreyBoldSubHeader>Biography</GreyBoldSubHeader>
        <GreyThinTextSmall>
            {props.bio}
        </GreyThinTextSmall>
    </>
);

export const Website =  (props) => (
    <>
        <GreyBoldSubHeader>Website</GreyBoldSubHeader>
        <WebLink>{props.link}</WebLink>
    </>
);

export const Skills = (props) => (
    <>
        <GreyBoldSubHeader>Skills</GreyBoldSubHeader>
        {props.skills.map((skill, index) => {
            if (index < ProfileColors.length - 1)
                return (<TagBox key={skill} color={ProfileColors[index]} />);
            else
                return (<TagBox key={skill} color={ProfileColors[index % ProfileColors.length]} />);
            }
        )}
    </>
);