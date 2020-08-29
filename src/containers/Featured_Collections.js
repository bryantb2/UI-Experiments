import testBackgroundImage from "../images/mountainsBG.jpg";
import {OrangeGradient} from "../elements";
import {UICardBackground} from "../components";
import React from "react";

export const FeaturedCollectionCard = (props) => (
    <UICardBackground style={{width: '100%'}} backgroundImage={testBackgroundImage} title={"Mountains"}>
        <OrangeGradient>Featured Collections</OrangeGradient>
    </UICardBackground>
);

export default () => (
    <div>Nothing yet.</div>
);
