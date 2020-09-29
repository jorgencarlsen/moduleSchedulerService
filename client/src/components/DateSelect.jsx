import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class DateSelect extends React.Component {
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
      <div style={{border: '1px solid red'}}>
        Date Select
        <form>
          <select onChange={this.state.date} multiple>
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
          <option value="DAT">DAT</option>
        </select>
        </form>
      </div>
    );
  }
}
export default DateSelect;