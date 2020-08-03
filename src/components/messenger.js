import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
    MessageIconBubble,
    DribbbleIconBubble,
    TwitterIconBubble,
    ClockHeader,
    MessageTextBubble,
    GreyThinTextSmall
} from '../elements';

const MainContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const ContentItem = styled.div`
    display: flex;
    flex-wrap: no-wrap;
`;

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
        <ClockHeader>{moment(time).format("hh:mm A")}</ClockHeader>
    )
};

export const MessengerDashboard = props => (
    <div>
        <MessageTextBubble>Send a message to Jenna...</MessageTextBubble>
        <GreyThinTextSmall style={{textAlign: 'right'}}>{props.location}</GreyThinTextSmall>
        <MainContentContainer>
            <ContentItem style={{flexGrow: '2', justifyContent: 'space-between'}}>
                <MessageIconBubble />
                <DribbbleIconBubble />
                <TwitterIconBubble />
            </ContentItem>
            <ContentItem style={{flexGrow: '1', justifyContent: 'flex-end'}}>
                <RealTimeClock />
            </ContentItem>
        </MainContentContainer>
    </div>
)