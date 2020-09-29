import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      needFinance: false,
      errormessage: ''
    };
  }
  myChangeHandler(event) {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <div style={{border: '1px solid red'}}>
        User Input
      <form>
      <input
        type='text'
        name='name'
        placeholder="Name"
        onChange={this.myChangeHandler}
      />
      <input
        type='tel'
        name='phone'
        placeholder="Phone"
        onChange={this.myChangeHandler}
      />
      <br/>
      <input
        type='email'
        name='email'
        placeholder="Email"
        onChange={this.myChangeHandler}
      />
      <br/>
      <label>
          <input
            name="needFinance"
            type="checkbox"
            checked={this.state.needFinance}
            onChange={this.handleInputChange} />
            I want to talk about financing
        </label>
        <br />
       <input type="submit" value="Schedule a Tour" />
      {this.state.errormessage}
      </form>
      </div>
    );
  }
}
export default UserInput;