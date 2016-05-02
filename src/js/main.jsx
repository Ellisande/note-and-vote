
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTap from 'react-tap-event-plugin';
import App from './components/app';
import Meeting from './components/meeting';
import MeetingList from './components/meetingList';
import How from './components/how';
import When from './components/when';
import Safety from './components/safety';
import store from './store/store';
import {Provider} from 'react-redux';
injectTap();
function render(){
  let content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);
  content = document.getElementById('content');

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/note-and-vote' component={App}>
          <IndexRoute component={MeetingList} />
          <Route path='note-and-vote/how' component={How}/>
          <Route path='note-and-vote/when' component={When}/>
          <Route path='note-and-vote/safety' component={Safety} />
        </Route>
        <Route path='note-and-vote/meeting/:name' component={Meeting}/>
      </Router>
    </Provider>,
      content
  );
}

function main(){
  render();
}

main();
