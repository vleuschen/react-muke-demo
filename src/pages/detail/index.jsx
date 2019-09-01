import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';
import {
  DetailWrapper,
  Header,
  Content,
} from './style';

class Detail extends Component {
  
  componentDidMount () {
    this.props.getDetail(this.props.match.params.id);
  }

  render() {

    const { title,content } = this.props;

    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content 
        dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content']),
})

const mapDispatchToPros = (dispatch) => ({

  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }

})

export default connect(mapStateToProps,mapDispatchToPros)(withRouter(Detail));
