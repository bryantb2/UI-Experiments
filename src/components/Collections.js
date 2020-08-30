import React from 'react';
import styled from 'styled-components';
import {CollectionImage} from "../elements";

const CollectionList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

export const CollectionsIconList = props => (
    <CollectionList>
        {
            props.collections.map(collection =>
                <CollectionImage
                    key={collection.name}
                    src={collection.link}
                    width="100px"
                />
            )
        }
    </CollectionList>
);