import styled, { css } from 'styled-components';
import React from 'react';
import {
    GreyBoldSubHeader,
    GreyThinTextSmall,
    WhiteBoldHeader,
    BlackThinHeader,
    ProfileImage,
    ProfileFollowCount,
    OrangeGradient
} from '../elements';

// UI card
const CardContainer = styled.div(
    props => css`
        height: ${props.size};
        position: relative;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        margin-bottom: 1.5rem;
        background-image: ${
           props.BG === true ? 'url(' + props.BGSource + ')' : 'none'
        };
        background-repeat: no-repeat;
        background-size: cover;
        background-color: ${
            props.BG === true ? 'none' : 'white'
        };
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `);

const CardChildContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: transparent;
`;

const CardVerticalContentContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const RelativeParent = styled.div`
    position: relative;
`;

const TeamContentContainer = styled.div`
    display: flex;
    background-color: transparent;
    flex-wrap: wrap;
`;

const PositionFollowCount = styled(ProfileFollowCount)`
    position: absolute;
    top: 91%;
    left: 50%;
    width: 110px;
    transform: translate(-50%, -50%);
`;

export const UICard = (props) => (
  <CardContainer BG={false} size={'auto'}>
      <GreyBoldSubHeader>{props.title}</GreyBoldSubHeader>
      <CardChildContentContainer>
          {props.children}
      </CardChildContentContainer>
  </CardContainer>
);

export const UITeamCard = (props) => (
  <CardContainer BG={false} size={'auto'}>
      <GreyBoldSubHeader>{props.title}</GreyBoldSubHeader>
      <TeamContentContainer>
        <RelativeParent style={{marginRight: '2rem'}}>
            <ProfileImage
                src={props.teamImage}
                width={'190px'}
            />
            <PositionFollowCount>{props.followCount} members</PositionFollowCount>
        </RelativeParent>
        <RelativeParent>
            <BlackThinHeader style={{marginTop: '1rem', marginBottom: '0'}}>{props.teamName}</BlackThinHeader>
            <GreyThinTextSmall style={{marginTop: '0'}}>Formed in {props.creationDate}</GreyThinTextSmall>
            <OrangeGradient style={{marginBottom: '0.5rem'}}>Follow</OrangeGradient>
            <GreyThinTextSmall>Jenna is a Member Since Nov, 2014</GreyThinTextSmall>
        </RelativeParent>
      </TeamContentContainer>
  </CardContainer>
);

const ScalableHeader = styled(WhiteBoldHeader)`
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

export const UICardBackground = (props) => (
    <CardContainer BG={true} BGSource={props.backgroundImage} size={'300px'}>
        <CardVerticalContentContainer>
            <ScalableHeader style={{textAlign: 'center', marginBottom: '1rem'}}>{props.title}</ScalableHeader>
            <CardChildContentContainer style={{justifyContent: 'center'}}>
                {props.children}
            </CardChildContentContainer>
        </CardVerticalContentContainer>
    </CardContainer>
);



