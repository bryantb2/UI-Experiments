import React from 'react';
import {
    Card,
    VCenteredContent,
    CardContent
} from '../elements';

export const FlexCard = props => (
    <Card
        BG={props.hasBG}
        BGSource={props.backgroundImage}
        style={{...props.style}}
    >
        <CardContent>
            {props.children}
        </CardContent>
    </Card>
);

export const VCenteredCard = props => (
    <Card
        BG={props.hasBG}
        BGSource={props.backgroundImage}
        style={{...props.style}}
        className={props.className}
    >
        <VCenteredContent>
            {props.children}
        </VCenteredContent>
    </Card>
);



