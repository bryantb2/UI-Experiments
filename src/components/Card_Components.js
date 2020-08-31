import React from 'react';
import {
    Card_Elements,
    VCenteredContent,
    CardContent
} from '../elements';

export const FlexCard = props => (
    <Card_Elements
        BG={props.hasBG}
        BGSource={props.backgroundImage}
        style={{...props.style}}
    >
        <CardContent>
            {props.children}
        </CardContent>
    </Card_Elements>
);

export const VCenteredCard = props => (
    <Card_Elements
        BG={props.hasBG}
        BGSource={props.backgroundImage}
        style={{...props.style}}
        className={props.className}
    >
        <VCenteredContent>
            {props.children}
        </VCenteredContent>
    </Card_Elements>
);



