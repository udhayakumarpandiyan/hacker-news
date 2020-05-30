import { combineReducers } from 'redux'
import storiesListReducer from './StoriesListReducer';

const rootReducer = combineReducers({
    storiesListReducer,
})

export default rootReducer;
