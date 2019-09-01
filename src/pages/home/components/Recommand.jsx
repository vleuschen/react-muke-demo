import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  RecommandWrapper,
  RecommandItem,
} from '../style';

class Recommand extends Component {
  
  render() {

    const { list } = this.props;

    return (
      <div>
        <RecommandWrapper>
          {
            list.map((item,index) => {
              return <RecommandItem 
                key={index}
                imgUrl={item.get('imgUrl')}
              />
            })
          }
        </RecommandWrapper>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  list: state.getIn(['home','recommendList'])
})

export default connect(mapStateToProps,null)(Recommand);
