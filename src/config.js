export const MAIN_URL = "https://hn.algolia.com/api";

export const API = {
  newsItems: {
    getStoriesList: `${MAIN_URL}/v1/items`,
  },
  search:{
    searchResults : `${MAIN_URL}/v1/search`,
  }
};
