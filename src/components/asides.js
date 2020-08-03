import {
    GreyBoldSubHeader,
    GreyThinTextSmall,
    ProfileColors,
    TagArrow,
    TagBox,
    WebLink
} from "../elements";
import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const BlankContainer = styled.div`
    margin: 0;
    padding: 0;
`;

export const Biography = (props) => (
    <BlankContainer style={props.style}>
        <GreyBoldSubHeader style={{marginBottom: '0.5rem'}}>Biography</GreyBoldSubHeader>
        <GreyThinTextSmall style={{marginTop: 0}}>
            {props.bio}
        </GreyThinTextSmall>
    </BlankContainer>
);

export const Website =  (props) => (
    <BlankContainer style={props.style}>
        <GreyBoldSubHeader style={{marginBottom: '0.5rem'}}>Website</GreyBoldSubHeader>
        <WebLink>{props.link}</WebLink>
    </BlankContainer>
);

export const Skills = (props) => (
    <BlankContainer style={props.style}>
        <GreyBoldSubHeader style={{marginBottom: '0.5rem'}}>Skills</GreyBoldSubHeader>
        <SkillsContainer>
            {props.skills.map((skill, index) =>
                <TagBox
                    key={skill}
                    color={ProfileColors[index < (ProfileColors.length - 1) ? index : index % ProfileColors.length]}
                >
                    {skill} <TagArrow />
                </TagBox>
            )}
        </SkillsContainer>
    </BlankContainer>
);