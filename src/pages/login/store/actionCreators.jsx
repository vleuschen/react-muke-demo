import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = (login) => ({
  type: actionTypes.CHANGE_LOGIN,
  login,
})

export const login = (account,password) => {
    return (dispatch) => {
      axios.get('/api/login.json?account='+account+'&password='+password).then((res) => {
        const result = res.data.data;
        if(result){
          dispatch(changeLogin(result));
        }else{  
           alert('登录失败')
        }
      })
    }
}

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false,
})