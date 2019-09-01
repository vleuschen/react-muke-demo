import { combineReducers } from 'redux-immutable';
import {reducer as headReducer } from '../common/header/store';
import {reducer as homeReducer } from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store';

// redux-immutable 将state也转换为immutable对象

const reducer = combineReducers({
  header: headReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
})

export default reducer;