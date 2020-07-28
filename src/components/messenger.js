import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
    MessageIconBubble,
    DribbbleIconBubble,
    TwitterIconBubble,
    ClockHeader,
    MessageTextBubble
} from '../elements';

const FlexContainer = styled.div`
    
`;

export const RealTimeClock = props => {
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