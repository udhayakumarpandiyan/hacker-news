import history from './history';

const STORIES_LIST = '/stories-list';

const redirect = (path, state) => {
    history.push(path, state);
}

export default {
    redirect: redirect,
    STORIES_LIST: STORIES_LIST,


}

