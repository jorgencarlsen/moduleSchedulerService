import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UserInputMessage from './UserInputMessage.jsx'
import StatuatoryMessage from './StatuatoryMessage.jsx'
import AgentInfo from './AgentInfo.jsx'

class RequestInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      // shouldRefresh: false;
    };
    // this.getTop = this.getTop.bind(this);
  }

  render() {
    return (
      // <div style={{border: '1px solid black'}}>
      <div>
        <UserInputMessage />
        <StatuatoryMessage />
        <AgentInfo />
      </div>
    );
  }
}
export default RequestInfo;