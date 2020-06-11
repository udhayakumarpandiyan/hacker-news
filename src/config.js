export const STORIES_LIST_URL = "https://hn.algolia.com/api";

export const API = {
    newsItems: {
    getStoriesList: `${STORIES_LIST_URL}/v1/items/`,
  },
  search: {
    searchResults: `${STORIES_LIST_URL}/v1/`,
  },
};
