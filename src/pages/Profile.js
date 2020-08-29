import React from 'react';
import styled from 'styled-components';
import {
    NoGutterGrid,
    FourFifthsCol,
    CreditCaption
} from '../components';
import UserProfile from '../containers/User_Profile';
import UserAsideContent from '../containers/User_Aside';
import UserSocialCard from '../containers/User_Social_Cards';
import { FeaturedCollectionCard } from '../containers/Featured_Collections';

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

const Profile = (props) =>  (
    <>
        <UserProfile />
        <MainContentContainer>
            <NoGutterGrid>
                <FeaturedCollectionCard />
                <UserSocialCard />
                <UserAsideContent />
            </NoGutterGrid>
            <CreditCaption />
        </MainContentContainer>
    </>
);

export default Profile;