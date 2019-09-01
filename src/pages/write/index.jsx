import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Write extends Component {
  render() {

    const { login,loginStatus } = this.props;

    if(loginStatus) {
      return (
        <div>
          写文章吧
        </div>
      )
    }else{
      return (
        <Redirect to="/login" />
      )
    }
    
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login','login']),
})



export default connect(mapStateToProps,null) (Write)
