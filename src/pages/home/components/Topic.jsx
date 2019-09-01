import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { 
  TopicWrapper,
  TopicItem,
 } from '../style';

class Topic extends PureComponent {
  
  constructor(props){
    super(props);
  }

  render() {

  const { list } = this.props;

    return (
      <TopicWrapper>
        {
          list.map((item,index) => {
            return (
              <TopicItem key={index}>
                <img 
                  className="topic-pic"
                  src={item.get('imgUrl')}
                  alt=''
                />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
        {/* <TopicItem>
          <img className="topic-pic"
               src="https://cdn.pixabay.com/photo/2017/06/16/10/25/lady-2408609_960_720.jpg"
          />
          社会热点
        </TopicItem> */}
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','topicList']),
})


export default connect(mapStateToProps,null)(Topic);