import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UserInput from './UserInput.jsx'

class DateSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: '',
    };
    this.onClickedDate = this.onClickedDate.bind(this);
  }

  onClickedDate(event) {
    this.setState({selectedDate: event.target.value});
  }

  render() {
    return (
      <div style={{border: '1px solid black'}}>
        Date Select
        <form>
          <select onChange={this.onClickedDate} multiple>
            {this.props.days.map((day, index) => {
              return (
                <option key={index} value={day}>{day}</option>
              );
            }
            )}
          </select>
          {/* <select style={{display:'table-row'}} onChange={this.state.selectedDate} multiple>
            {this.props.days.map((day, index) => {
              return (
                <option style={{display:'table-cell'}} key={index} value="day">{day}</option>
              );
            }
            )}
          </select> */}
        </form>
        <UserInput visitType={this.props.type} selectedDate={this.state.selectedDate}/>
      </div>
    );
  }
}
export default DateSelect;