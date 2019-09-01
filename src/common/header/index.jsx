import React, { Component } from 'react';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  getListArea = () => {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = ((page - 1) * 10); i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            人气搜索
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            <SearchInfoList>
              {
                pageList
              }
            </SearchInfoList>
          </div>
        </SearchInfo>
      )
    }
  }

  render() {

    const { focused, handeInputBlur, handleInputFocus, list, login, logout } = this.props;

    return (
      <div>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            {
              login
                ?
                <Link to="/login">
                  <NavItem onClick={logout} className="right">退出</NavItem>
                </Link>
                :
                <Link to="/login">
                  <NavItem className="right">登录</NavItem>
                </Link>
            }

            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <SearchWrapper>
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handeInputBlur}
                ></NavSearch><i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
                {this.getListArea()}
              </SearchWrapper>
            </CSSTransition>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="writing">
                <i className="iconfont">&#xe6b3;</i>
                写博客
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size == 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handeInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);