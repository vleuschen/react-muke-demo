import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button,
} from './style';

class Login extends Component {
  render() {

    const { login,loginStatus } = this.props;

    if(!loginStatus) {
      return (
        <LoginWrapper>
        <LoginBox>
          <Input placeholder="请输入用户名" ref={(input) => {this.account = input}} />
          <Input placeholder="请输入密码"  type="password" ref={(input) => {this.password = input}} />
          <Button onClick={()=>login(this.account,this.password)}>登录</Button>
        </LoginBox>
      </LoginWrapper>
      )
    }else{
      return (
        <Redirect to="/" />
      )
    }
    
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login','login']),
})

const mapDispatchToProps = (dispatch) => ({
  login(accountElem,passwordElem) {
    dispatch(actionCreators.login(accountElem,passwordElem));
  }
})

export default connect(mapStateToProps,mapDispatchToProps) (Login)
