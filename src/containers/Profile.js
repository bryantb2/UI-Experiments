import React from 'react';
import {
    GutterGrid,
    NoGutterGrid,
    OneThirdCol,
    OneThirdColMarg,
    TwoThirdCol,
    TwoThirdColMarg,
    ProfileStats,
    UserProfile,
    UICard,
    UICardBackground,
    PersonalCategories,
    UITeamCard,
    Website,
    Skills,
    Biography
} from '../components';
import {
    OrangeGradient,
    RoundedImage,
    GreyBoldSubHeader,
    GreyThinTextSmall,
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
            <OneThirdColMarg>
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
            </OneThirdColMarg>
            <TwoThirdColMarg>
                <UICardBackground backgroundImage={testBackgroundImage} title={"Mountains"}>
                    <OrangeGradient>Featured Collections</OrangeGradient>
                </UICardBackground>
                <NoGutterGrid>
                    <TwoThirdCol>
                        <UICard title={"Popular Collections"}>
                            {
                                collections.map(collection =>
                                    <RoundedImage
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
                            style={{marginBottom: '1rem'}}
                            bio={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ultrices orci. Phasellus\n' +
                                '                            nisl felis, egestas in leo a, sodales fringilla magna. Nulla luctus turpis felis, ut auctor sem tincidunt ut.\n' +
                                '                            Donec nisi nisl, imperdiet a pulvinar id, varius a erat. Vivamus congue, eros quis viverra bibendum, ipsum ligula\n' +
                                '                            dictum augue, et pretium velit leo eu quam. Vestibulum sit amet posuere justo. Duis nec tellus massa.'
                            }
                        />
                        <Website style={{marginBottom: '2rem'}} link={'wwww.google.com'} />
                        <Skills skills={skills} />

                    </OneThirdCol>
                </NoGutterGrid>
            </TwoThirdColMarg>
        </GutterGrid>
    );
}

export default Profile;