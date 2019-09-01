import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';
import { actionCreators } from '.';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

//返回一个函数
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      console.log(res);
      const data = res.data; //获取数据
      const action = changeList(data.data);
      dispatch(action);
    }).catch(() => {
      console.log('error');
    })
  }
}

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
})

//点击换一换更换页数
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page,
})