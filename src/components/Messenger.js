import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
    MessageIconBubble,
    DribbbleIconBubble,
    TwitterIconBubble,
    ClockHeader,
    MessageTextBubble,
    UnstyledInput,
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

const ClockContent = styled(ContentItem)`
    flex-grow: 1;
    justify-content: flex-end;
    flex-direction: column;
`;

const IconContent = styled(ContentItem)`
    flex-grow: 2;
    justify-content: space-between;
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
        <ClockHeader style={{...props.style}}>{moment(time).format("hh:mm A")}</ClockHeader>
    )
};

export const MessengerDashboard = props => (
    <div>
        <MessageTextBubble>
            <UnstyledInput type={'text'} placeholder={'Send a message to Jenna...'} />
        </MessageTextBubble>
        <MainContentContainer>
            <IconContent>
                <MessageIconBubble />
                <DribbbleIconBubble />
                <TwitterIconBubble />
            </IconContent>
            <ClockContent>
                <GreyThinTextSmall style={{marginBottom: 0, textAlign: 'right'}}>{props.location}</GreyThinTextSmall>
                <RealTimeClock style={{marginTop: 0, textAlign: 'right'}} />
            </ClockContent>
        </MainContentContainer>
    </div>
)