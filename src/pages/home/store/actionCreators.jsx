import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const data = res.data.data;
      console.log(data);
      const action = changeHomeData(data);
      dispatch(action);
    })
  }
}

const addHomeList = (list,nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage,
})

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then((res) => {
      const data = res.data.data;
      console.log(data);
      dispatch(addHomeList(data,page+1));
    })
  }
}

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show,
})