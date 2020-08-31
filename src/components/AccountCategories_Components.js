import styled, {keyframes} from "styled-components";
import { GreyThinTextSmall } from "../elements";
import React from "react";

const CategoryLink = styled.a`
    text-decoration: none;
`;

const TextAnimation = keyframes`
    0% { font-size: 15pt; }
    100% { font-size: 20pt; color: black; }
`;

const CategoryText = styled(GreyThinTextSmall)`
    margin: 0;
    padding: 0.75rem;
    padding-left: 0;
    &:hover {
        animation-name: ${TextAnimation};
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }
`;

const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 1.5rem;
    
    @media (${props => props.theme.screenQueries.tablet}) {
        flex-direction: row;
    } 
    @media (${props => props.theme.screenQueries.laptop}) {
        flex-direction: column;
        text-align: left;
        margin-bottom: revert;
    } 
`;

export const PersonalCategories = (props) => (
    <CategoriesContainer>
        {props.categories.map(category =>
            <CategoryLink href={props.category}>
                <CategoryText key={category} style={{fontSize: '15pt'}}>{category}</CategoryText>
            </CategoryLink>
        )}
    </CategoriesContainer>
);