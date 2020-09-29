import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DateSelect from './DateSelect.jsx'
import UserInput from './UserInput.jsx'
import HealthAdvisory from './HealthAdvisory.jsx'

class ScheduleATour extends React.Component {
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
      <div style={{border: '1px solid red'}}>
        Schedule A Tour
        <br></br>
        <br></br>
        Tour Type?
        <p>
        onHover: If you’d like to tour this home without leaving /n yours, select the virtual tour type /n  and discuss available options with the agent you are /n connected with.
        </p>
        <button>In-Person</button>
        <button>Virtual</button>
        <DateSelect />
        <UserInput />
        <HealthAdvisory/>
      </div>
    );
  }
}
export default ScheduleATour;