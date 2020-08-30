import React from 'react';
import {
    MessageInput,
    SocialIcons,
    ClockAndLocation
} from '../components';
import styled from "styled-components";

const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export default (props) => (
    <div>
        <MessageInput username={'Jenna'}/>
        <MainContent>
            <SocialIcons
                messageLink={'#'}
                dribbbleLink={'#'}
                twitterLink={'#'}
            />
            <ClockAndLocation />
        </MainContent>
    </div>
);