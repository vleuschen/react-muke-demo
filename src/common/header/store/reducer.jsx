import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

//利用immutabl将js对象转为immutable对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [], //存储点击搜索框出现的内容
  page: 1,
  totalPage: 1,
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      //immutable对象的set方法会结合之前immutable对象的值
      //和设置的值，返回一个全新的对象
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      console.log('action', action);
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn',false);
    case actionTypes.CHANGE_PAGE: 
      return state.set('page',action.page);
    default: 
      return state;
  }
}