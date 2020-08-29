import styled from "styled-components";
import React from 'react';
import {TwoThirdCol, UICard, UITeamCard} from "../components";
import {CollectionImage} from "../elements";
import testImage from "../images/profileImage.jpg";

const UserCardContainer = styled(TwoThirdCol)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        width: 100%;
    }
    @media (${props => props.theme.screenQueries.laptop}) {
        width: 64%;
    }
`;

const collections = [
    {name: 'Test 1', link: testImage},
    {name: 'Test 2', link: testImage},
    {name: 'Test 3', link: testImage},
    {name: 'Test 4', link: testImage},
    {name: 'Test 5', link: testImage},
];

export default (props) => (
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
)