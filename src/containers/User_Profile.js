import styled from "styled-components";
import {OneFifthCol, PersonalCategories, ProfileStats, UserProfile} from "../components";
import testImage from "../images/profileImage.jpg";
import {LineDivider} from "../elements";
import React from "react";

const UserInfoContainer = styled(OneFifthCol)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        width: 100%;
    }
    @media (${props => props.theme.screenQueries.laptop}) {
        width: 20%;
    }
`;

const categories = ['Collections', 'Team', 'Work in Progress', 'Blog', 'Archives'];

export default (props) => (
    <UserInfoContainer>
        <UserProfile
            name={'Jenna Smith'}
            bioTitle={'Art Director'}
            image={testImage}
        />
        <ProfileStats
            collectionCount={42}
            followCount={1302}
            likeCount={18000}
        />
        <LineDivider />
        <PersonalCategories categories={categories} />
    </UserInfoContainer>
);