import testBackgroundImage from "../images/mountainsBG.jpg";
import {Card, CollectionImage, GreyBoldSubHeader, OrangeGradient, WhiteBoldHeader} from "../elements";
import {
    VCenteredCard,
    FlexCard,
    TeamMemberIcon,
    TeamDescription
} from "../components";
import React from "react";
import styled from "styled-components";
import testImage from "../images/profileImage.jpg";

const ScalableHeader = styled(WhiteBoldHeader)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        font-size: 35pt;
    }   
    @media (${props => props.theme.screenQueries.tablet}) {
        font-size: 50pt;
    }      
    @media (${props => props.theme.screenQueries.laptop}) {
        font-size: 80pt;
    }   
`;

export const FeaturedCollectionCard = (props) => (
    <VCenteredCard style={{width: '100%', height: '300px'}} hasBG={true} backgroundImage={testBackgroundImage}>
        <ScalableHeader style={{textAlign: 'center', marginBottom: '1rem', width: '100%'}}>Mountains</ScalableHeader>
        <OrangeGradient>Featured Collections</OrangeGradient>
    </VCenteredCard>
);

export const FeaturedTeamCard = props => (
    <FlexCard hasBG={false}>
        <GreyBoldSubHeader style={{width: '100%'}}>Jenna appears in these teams</GreyBoldSubHeader>
        <TeamMemberIcon
            image={testBackgroundImage}
            memberCount={42}
            style={{marginRight: '2rem'}}
        />
        <TeamDescription
            teamName={'Royal UI Force'}
            creationDate={'2013'}
        />
    </FlexCard>
);

const collections = [
    {name: 'Test 1', link: testImage},
    {name: 'Test 2', link: testImage},
    {name: 'Test 3', link: testImage},
    {name: 'Test 4', link: testImage},
    {name: 'Test 5', link: testImage},
];

export const PopularCollectionsCard = props => (
    <FlexCard hasBG={false}>
        <GreyBoldSubHeader style={{width: '100%'}}>Popular Collections</GreyBoldSubHeader>
        {
            collections.map(collection =>
                <CollectionImage
                    key={collection.name}
                    src={collection.link}
                    width="100px"
                />
            )
        }
    </FlexCard>
);