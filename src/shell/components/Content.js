import React from 'react';
import StoriesList from '../../modules/stories/containers/StoriesList';

const MainContent = (props) => {

    console.log("sdfdsadfsd", props.searchResults);
    return (<div className="content">
        <StoriesList isSearch={props.isSearch}
            searchText={props.searchText}
            searchResults={props.searchResults} />
    </div>)
}


export default MainContent;

