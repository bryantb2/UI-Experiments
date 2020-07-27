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
    const collections = Array(5).fill(0);
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
                <PersonalCategories />
            </OneThirdColMarg>
            <TwoThirdColMarg>
                <UICardBackground backgroundImage={testBackgroundImage} title={"Mountains"}>
                    <OrangeGradient>Featured Collections</OrangeGradient>
                </UICardBackground>
                <NoGutterGrid>
                    <TwoThirdCol>
                        <UICard title={"Popular Collections"}>
                            {
                                collections.map(val =>
                                    <RoundedImage
                                        src={testImage}
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
                            style={{marginBottom: '0.5rem'}}
                            bio={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ultrices orci. Phasellus\n' +
                                '                            nisl felis, egestas in leo a, sodales fringilla magna. Nulla luctus turpis felis, ut auctor sem tincidunt ut.\n' +
                                '                            Donec nisi nisl, imperdiet a pulvinar id, varius a erat. Vivamus congue, eros quis viverra bibendum, ipsum ligula\n' +
                                '                            dictum augue, et pretium velit leo eu quam. Vestibulum sit amet posuere justo. Duis nec tellus massa.'
                            }
                        />
                        <Website style={{marginBottom: '0.5rem'}} link={'wwww.google.com'} />
                        <Skills skills={[ 'Adobe Photoshop', 'Adobe XD CC', 'VueJS']} />

                    </OneThirdCol>
                </NoGutterGrid>
            </TwoThirdColMarg>
        </GutterGrid>
    );
}

export default Profile;