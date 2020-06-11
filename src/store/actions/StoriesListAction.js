import * as TYPES from '../types';
import { API } from '../../config';

const onFail = msg => ({
    type: TYPES.ON_ERROR,
    msg
});

const onGetStoriesListSuccess = payload => {
    return {
        payload,
        type: TYPES.GET_STORIES_LIST,
    };
};

const onGetSearchResultsSuccess = payload => {
    return {
        payload,
        type: TYPES.GET_SEARCH_RESULTS,
    };
};

export const getStoriesList = (id = 1) => {
    
    return (dispatch) => {

        fetch(`${API.newsItems.getStoriesList}${id}`
        )
            .then(
                function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    response.json().then(function (data) {
                        dispatch(onGetStoriesListSuccess(data));
                    });
                }
            )
            .catch(function (err) {
                dispatch(onFail(err));
            });
    };

}

export const getSearchResults = (text = '', tags='story') => {
    
    return (dispatch) => {

        fetch(`${API.search.searchResults}?query=${text}&tags=${tags}`)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    response.json().then(function (data) {
                        dispatch(onGetSearchResultsSuccess(data));
                    });
                }
            )
            .catch(function (err) {
                dispatch(onFail(err));
            });
    };

}

