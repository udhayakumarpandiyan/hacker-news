import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const searchText = (event) =>{
        props.onSearchText(event.target.value);
    }
    
    return (
        <div className="header">
            {/* <img src={AppLogo} /> */}
            {/* not able to find any suitable icon so making this with div */}
            <div className="logo">
                H
            </div>
            
            <div className="search-label-container">
                <label className="search-label"> Search
            </label>
                <label className="search-label"> Hacker News
            </label>
            </div>

            <div className="header-content">
                <input className="search-text-input" 
                type="text" 
                placeholder="Search stories by title, url or author" 
                onChange={searchText}/>

                <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} color="#ff742b" size="1x" />
                </button>

            </div>

        </div>
    )
}
export default Header;