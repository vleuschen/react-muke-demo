import React, { PureComponent } from 'react'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
} from './style';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommand from './components/Recommand';
import Writer from './components/Writer';

class Home extends PureComponent {
  
  

  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  
  handleScrollTop () {
    window.scrollTo(0,0);
  }

  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow);
  }


  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png"  />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommand />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ?
          <BackTop onClick={this.handleScrollTop}>回到頂部</BackTop> :
          ''
        }
        
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow(e) {
    if(document.documentElement.scrollTop > 100){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
