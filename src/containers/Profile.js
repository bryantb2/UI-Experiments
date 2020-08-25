import React from 'react';
import {
    GutterGrid,
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
        <GutterGrid>
            <OneFifthCol>
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
            </OneFifthCol>
            <FourFifthsCol>
                <UICardBackground backgroundImage={testBackgroundImage} title={"Mountains"}>
                    <OrangeGradient>Featured Collections</OrangeGradient>
                </UICardBackground>
                <NoGutterGrid>
                    <TwoThirdCol>
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
                    </TwoThirdCol>
                    <OneThirdCol>
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
                    </OneThirdCol>
                </NoGutterGrid>
                <CreditCaption />
            </FourFifthsCol>
        </GutterGrid>
    );
}

export default Profile;