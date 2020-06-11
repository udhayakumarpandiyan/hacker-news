import { GET_STORIES_LIST, GET_SEARCH_RESULTS } from "../types";
const initialState = {
    storiesList: [],
    searchResults: []
}

export default function getStoriesList(state = initialState, action) {
    switch (action.type) {
        case GET_STORIES_LIST:
            return {
                ...state,
                storiesList: [...state.storiesList, action.payload]
            };
        case GET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload
            }
        default:
            return {
                ...state
            };
    }
};
