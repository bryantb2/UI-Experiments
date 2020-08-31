import testBackgroundImage from "../images/mountainsBG.jpg";
import {
    GreyBoldSubHeader,
    OrangeButton,
    WhiteBoldHeader
} from "../elements";
import {
    VCenteredCard,
    FlexCard,
    TeamMemberIcon,
    TeamDescription,
    CollectionsIconList
} from "../components";
import React from "react";
import styled from "styled-components";
import testImage from "../images/profileImage.jpg";

const ScalableHeader = styled(WhiteBoldHeader)`
    margin-top: 0;
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

const CollectionCard = styled(VCenteredCard)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        padding: 0;
    } 
    @media (${props => props.theme.screenQueries.mobileL}) {
        padding: 1.5rem 2rem;
    } 
`;

export const FeaturedCollectionCard = (props) => (
    <CollectionCard style={{width: '100%', height: '300px'}} hasBG={true} backgroundImage={testBackgroundImage}>
        <ScalableHeader style={{textAlign: 'center', marginBottom: '1rem', width: '100%'}}>Mountains</ScalableHeader>
        <OrangeButton>Featured Collections</OrangeButton>
    </CollectionCard>
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
        <CollectionsIconList collections={collections} />
    </FlexCard>
);