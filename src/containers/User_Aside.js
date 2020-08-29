import styled from "styled-components";
import {
    Biography,
    MessengerDashboard,
    OneThirdCol,
    Skills,
    Website
} from "../components";
import React from "react";

const UserAsideContainer = styled(OneThirdCol)`
    @media (${props => props.theme.screenQueries.mobileS}) {
        width: 100%;
    }
    @media (${props => props.theme.screenQueries.laptop}) {
        width: 32%;
    }
`;

const skillsList = ['Adobe Photoshop', 'VueJS', 'Adobe XD CC'];

export default () => (
    <UserAsideContainer>
        <Biography
            style={{marginBottom: '1.55rem'}}
            bio={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ultrices orci. Phasellus\n' +
                '                            nisl felis, egestas in leo a, sodales fringilla magna. Nulla luctus turpis felis, ut auctor sem tincidunt ut.\n' +
                '                            Donec nisi nisl, imperdiet a pulvinar id, varius a erat. Vivamus congue, eros quis viverra bibendum, ipsum ligula'
            }
        />
        <Website
            style={{marginBottom: '1.55rem'}}
            link={'wwww.google.com'}
        />
        <Skills style={{marginBottom: '1.55rem'}} skills={skillsList} />
        <MessengerDashboard
            location={'Eugene, OR, USA'}
        />
    </UserAsideContainer>
);