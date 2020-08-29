import React from 'react';
import styled from 'styled-components';
import {
    NoGutterGrid,
    FourFifthsCol,
    CreditCaption,
    TwoThirdCol
} from '../components';
import UserProfile from '../containers/User_Profile';
import UserAsideContent from '../containers/User_Aside';
import { FeaturedCollectionCard, FeaturedTeamCard, PopularCollectionsCard } from '../containers/UI_Cards';

// create flexible containers for content
const MainContentContainer = styled(FourFifthsCol)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        width: 100%;
    }
    @media (${props => props.theme.screenQueries.laptop}) {
        width: 75%;
    }
    @media (${props => props.theme.screenQueries.laptopL}) {
        width: 80%;
    }
`;

const UserCardContainer = styled(TwoThirdCol)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        width: 100%;
    }
    @media (${props => props.theme.screenQueries.laptop}) {
        width: 64%;
    }
`;

const Profile = (props) =>  (
    <>
        <UserProfile />
        <MainContentContainer>
            <NoGutterGrid>
                <FeaturedCollectionCard />
                <UserCardContainer>
                    <PopularCollectionsCard />
                    <FeaturedTeamCard />
                </UserCardContainer>
                <UserAsideContent />
            </NoGutterGrid>
            <CreditCaption />
        </MainContentContainer>
    </>
);

export default Profile;