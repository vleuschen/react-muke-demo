import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultSatate = fromJS({
  title:'',
  content: '',
});

export default (state = defaultSatate, action) => {
  switch(action.type){
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: fromJS(action.title),
        content: fromJS(action.content)
      })
    default: 
      return state;
  }
}