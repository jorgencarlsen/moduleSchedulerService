import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AgentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      // shouldRefresh: false;
    };
    // this.getTop = this.getTop.bind(this);
  }


  render() {
    return (
      <div style={{border: '1px solid black'}}>
        Agent Select
        <form>
          <select onChange={this.state.date} multiple>
          <option value="Today">Jake</option>
          <option value="Tomorrow">Jorgen</option>
          <option value="DAT">Mike</option>
        </select>
        </form>
      </div>
    );
  }
}
export default AgentInfo;