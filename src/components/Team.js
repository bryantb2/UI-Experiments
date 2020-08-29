import styled from "styled-components";
import React from "react";
import {
    BlackThinHeader,
    GreyThinTextSmall,
    OrangeGradient,
    ProfileFollowCount,
    ProfileImage
} from "../elements";

const RelativeParent = styled.div`
    position: relative;
`;

const PositionFollowCount = styled(ProfileFollowCount)`
    position: absolute;
    top: 91%;
    left: 50%;
    width: 110px;
    transform: translate(-50%, -50%);
`;

export const TeamMemberIcon = props => (
    <RelativeParent style={{...props.style}}>
        <ProfileImage
            src={props.image}
            style={{width: '190px', height: '190px'}}
        />
        <PositionFollowCount>{props.memberCount} members</PositionFollowCount>
    </RelativeParent>
);

export const TeamDescription = props => (
    <RelativeParent style={{...props.style}}>
        <BlackThinHeader style={{marginTop: '1rem', marginBottom: '0'}}>{props.teamName}</BlackThinHeader>
        <GreyThinTextSmall style={{marginTop: '0'}}>Formed in {props.creationDate}</GreyThinTextSmall>
        <OrangeGradient style={{marginBottom: '0.5rem'}}>Follow</OrangeGradient>
        <GreyThinTextSmall>Jenna is a Member Since Nov, 2014</GreyThinTextSmall>
    </RelativeParent>
);