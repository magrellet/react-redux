import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

//take all the reducer an combined in one object
//main object
const allReducers = combineReducers({
    users: UserReducer
});

export default allReducers;