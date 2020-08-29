import React from 'react';
import styled, {css} from 'styled-components';
import {
    NoGutterGrid,
    OneThirdCol,
    TwoThirdCol,
    OneFifthCol,
    FourFifthsCol,
    ProfileStats,
    UserProfile,
    UICard,
    UICardBackground,
    PersonalCategories,
    UITeamCard,
    Website,
    Skills,
    Biography,
    MessengerDashboard,
    CreditCaption
} from '../components';
import {
    OrangeGradient,
    CollectionImage,
    LineDivider
} from "../elements";
import testImage from '../images/profileImage.jpg';
import testBackgroundImage from '../images/mountainsBG.jpg';

// create flexible containers for content
const UserInfoContainer = styled(OneFifthCol)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        width: 100%;
    }
    @media (${props => props.theme.screenQueries.laptop}) {
        width: 20%;
    }
`;

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

const Profile = (props) => {
    const collections = [
        {name: 'Test 1', link: testImage},
        {name: 'Test 2', link: testImage},
        {name: 'Test 3', link: testImage},
        {name: 'Test 4', link: testImage},
        {name: 'Test 5', link: testImage},
    ];
    const skills = ['Adobe Photoshop', 'VueJS', 'Adobe XD CC'];
    const categories = ['Collections', 'Team', 'Work in Progress', 'Blog', 'Archives'];

    return (
        <>
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
            <MainContentContainer>
                <UICardBackground backgroundImage={testBackgroundImage} title={"Mountains"}>
                    <OrangeGradient>Featured Collections</OrangeGradient>
                </UICardBackground>
                <NoGutterGrid>
                    <UserCardContainer>
                        <UICard title={"Popular Collections"}>
                            {
                                collections.map(collection =>
                                    <CollectionImage
                                        key={collection.name}
                                        src={collection.link}
                                        width="100px"
                                    />
                                )
                            }
                        </UICard>
                        <UITeamCard
                            teamImage={testImage}
                            title={'Jenna appears in these teams'}
                            teamName={'Royal UI Force'}
                            creationDate={2013}
                            followCount={42}
                        />
                    </UserCardContainer>
                    <UserAsideContainer>
                        <Biography
                            style={{marginBottom: '1.55rem'}}
                            bio={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ultrices orci. Phasellus\n' +
                                '                            nisl felis, egestas in leo a, sodales fringilla magna. Nulla luctus turpis felis, ut auctor sem tincidunt ut.\n' +
                                '                            Donec nisi nisl, imperdiet a pulvinar id, varius a erat. Vivamus congue, eros quis viverra bibendum, ipsum ligula'
                            }
                        />
                        <Website style={{marginBottom: '1.55rem'}} link={'wwww.google.com'} />
                        <Skills style={{marginBottom: '1.55rem'}} skills={skills} />
                        <MessengerDashboard
                            location={'Eugene, OR, USA'}
                        />
                    </UserAsideContainer>
                </NoGutterGrid>
                <CreditCaption />
            </MainContentContainer>
        </>
    );
}

export default Profile;