import React from 'react';
import styled from 'styled-components';
import {
    NoGutterGrid,
    FourFifthsCol,
    CreditCaption,
    TwoThirdCol,
    OneThirdCol
} from '../components';
import UserProfile from '../containers/User_Profile';
import UserAsideContent from '../containers/User_Aside';
import MessengerDashboard from '../containers/Messenger_Dashboard';
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

const UserAsideContainer = styled(OneThirdCol)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        width: 100%;
    }
    @media (${props => props.theme.screenQueries.laptop}) {
        width: 32%;
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
                <UserAsideContainer>
                    <UserAsideContent />
                    <MessengerDashboard
                        location={'Eugene, OR, USA'}
                    />
                </UserAsideContainer>
            </NoGutterGrid>
            <CreditCaption />
        </MainContentContainer>
    </>
);

export default Profile;