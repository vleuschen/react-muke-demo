import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

//利用immutabl将js对象转为immutable对象
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false,
});

const changeHomeData = (state,action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
  })
}

const addHomeList = (state,action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage,
  });
}

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state,action);
    case actionTypes.ADD_HOME_LIST:
      return addHomeList(state,action);
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show);
    default: 
      return state;
  }
}