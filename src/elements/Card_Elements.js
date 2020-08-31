import styled, {css} from "styled-components";
import React from 'react';

export const Card_Elements = styled.div(
    props => css`
        height: auto;
        width: auto;
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

export const VCenteredContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100%;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: transparent;
`;