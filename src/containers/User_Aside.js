import {
    Biography,
    Skills,
    Website
} from "../components";
import React from "react";

const skillsList = ['Adobe Photoshop', 'VueJS', 'Adobe XD CC'];

export default () => (
    <>
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
    </>
);