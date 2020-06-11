import React from 'react';
import Stories from '../../modules/stories/containers/Stories';

const MainContent = (props) => {
    return (<div className="content">
        <Stories isSearch={props.isSearch}
            searchText={props.searchText}
            searchResults={props.searchResults} />
    </div>)
}


export default MainContent;

