import styled from "styled-components";
import { BlackBoldTextLarge, GreyThinTextSmall } from "../elements";
import React from "react";

const StatsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    
    @media (${props => props.theme.screenQueries.tablet}) {
        justify-content: flex-start;
    } 
`;

const StatItemContainer = styled.div`
    text-align: center;
    
    @media (${props => props.theme.screenQueries.tablet}) {
        margin-right: 2rem;
        text-align: left;
    } 
`;

export const ProfileStats = (props) => (
    <StatsContainer>
        <StatItemContainer>
            <BlackBoldTextLarge>{props.collectionCount}</BlackBoldTextLarge>
            <GreyThinTextSmall>Collections</GreyThinTextSmall>
        </StatItemContainer>
        <StatItemContainer>
            <BlackBoldTextLarge>{props.followCount}</BlackBoldTextLarge>
            <GreyThinTextSmall>Followers</GreyThinTextSmall>
        </StatItemContainer>
        <StatItemContainer>
            <BlackBoldTextLarge>
                {
                    props.likeCount >= 1000 ? (props.likeCount / 1000).toFixed(2) :
                        props.likeCount
                }k
            </BlackBoldTextLarge>
            <GreyThinTextSmall>Likes</GreyThinTextSmall>
        </StatItemContainer>
    </StatsContainer>
);