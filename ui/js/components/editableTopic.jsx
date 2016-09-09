import React from 'react';
import Topic from './topic';
import {updateTopicTitle} from '../../../shared/actions';
import {dispatch} from '../services/socket';

class EditableTopic extends Topic {
  constructor(props){
    super(props);
    this.updateTopicTitle = this.updateTopicTitle.bind(this);
    this.submitTopicTitle = this.submitTopicTitle.bind(this);
    this.state = {
      newTopicTitle: this.props.topic.title
    };
  }
  updateTopicTitle(e){
    const newTopicTitle = e.target.value;
    const newState = Object.assign({}, this.state, {newTopicTitle});
    return this.setState(newState);
  }
  submitTopicTitle(e){
    e.preventDefault();
    const updateTitleAction = updateTopicTitle(this.state.newTopicTitle, this.props.topic.title);
    dispatch(updateTitleAction);
  }
  render(){
    return (
      <div className='topic'>
        <form className='topic-body' onSubmit={this.submitTopicTitle}>
          <input className='topic-title' value={this.state.newTopicTitle} onChange={this.updateTopicTitle}/>
          <div className='by-line'>Posted By: {this.props.topic.by}</div>
        </form>
        <div className='topic-actions'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default EditableTopic;
