import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
    ClockHeader,
    MessageTextBubble,
    UnstyledInput,
    GreyThinTextSmall,
    MediaIconBubble,
    StyledMsgIcon,
    StyledDrblIcon,
    StyledTwtrIcon
} from '../elements';


const ContentItem = styled.div`
    display: flex;
    flex-wrap: no-wrap;
`;

const ClockContent = styled(ContentItem)`
    flex-grow: 1;
    justify-content: flex-end;
    flex-direction: column;
`;

const IconContent = styled(ContentItem)`
    flex-grow: 2;
    justify-content: space-between;
    
    @media (${props => props.theme.screenQueries.mobileS}) {
        margin-bottom: 1rem;
    }
`;

const MessageBubble = styled(MessageTextBubble)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        margin-bottom: 1rem;
    } 
`;

const LocationHeading = styled(GreyThinTextSmall)`
    text-align: right;
    margin: 0;
    
    @media (${props => props.theme.screenQueries.mobileS}) {
        text-align: center;
    }
    @media (${props => props.theme.screenQueries.tablet}) {
        text-align: right;
    }  
`;

const ClockHeading = styled(ClockHeader)`
    text-align: right;
    margin-top: 0;
    
    @media (${props => props.theme.screenQueries.mobileS}) {
        text-align: center;
    } 
    @media (${props => props.theme.screenQueries.tablet}) {
        text-align: right;
    } 
`;

const MessageIconBubble = props => (
    <MediaIconBubble href={props.link}>
        <StyledMsgIcon />
    </MediaIconBubble>
);

const DribbbleIconBubble = props => (
    <MediaIconBubble href={props.link}>
        <StyledDrblIcon />
    </MediaIconBubble>
);

const TwitterIconBubble = props => (
    <MediaIconBubble href={props.link}>
        <StyledTwtrIcon />
    </MediaIconBubble>
);

const RealTimeClock = props => {
    const [time, setTime] = useState(moment());
    //console.log('time pre-format is: ' + time);
    //console.log('logging time in clock: ' + moment(time).format("hh:mm A"));

    // only fire on mount
    useEffect(() => {
        // set timer for updating clock every minute
        const timer = setInterval(() => {
            setTime(moment())
        }, 60000);
        // cleanup
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <ClockHeading>{moment(time).format("hh:mm A")}</ClockHeading>
    )
};

export const MessageInput = props => (
    <MessageBubble>
        <UnstyledInput type={'text'} placeholder={'Send a message to Jenna...'} />
    </MessageBubble>
);

export const SocialIcons = props => (
    <IconContent>
        <MessageIconBubble  link={props.messageLink} />
        <DribbbleIconBubble link={props.dribbbleLink} />
        <TwitterIconBubble  link={props.twitterLink}/>
    </IconContent>
);

export const ClockAndLocation = props => (
    <ClockContent>
        <LocationHeading>{props.location}</LocationHeading>
        <RealTimeClock />
    </ClockContent>
);