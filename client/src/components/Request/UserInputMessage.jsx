import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AgentInfo from './AgentInfo.jsx';
import styled from 'styled-components';

const ScheduleButton = styled.button`
    margin-bottom: 8px;
    margin: 0px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
    white-space: nowrap;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 16px;
    width: 30%;
    color: rgb(255, 255, 255);
    background-color: rgb(217, 60, 35);
    border-color: transparent;
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

class UserInputMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: '',
      needFinance: false,
      selectedAgentId: '',
      // errormessage: ''
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  myChangeHandler(event) {
    let nam = event.target.name;
    let val = event.target.value;
    // let err = '';
    // if (nam === "age") {
    //   if (val !="" && !Number(val)) {
    //     err = <strong>Your age must be a number</strong>;
    //   }
    // }
    // this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  checkHandler() {
    this.setState({needFinance: !this.state.needFinance});
  }

  handleSubmit() {
    const toSend = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message,
      finInterest: this.state.needFinance,
      selectedAgentId: this.state.selectedAgentId
    };
    axios.put('/api/userMessage', toSend)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

  }
  // name: String,
  // phone: String,
  // email: String,
  // tourType: String,
  // interestProprties: [],
  // finInterest: Boolean,
  // scheduledDate: Date,
  // joinedDate: Date,
  // contactedAgents: [],

  render() {
    return (
      <div style={{border: '1px solid black'}}>
        User Input
      <form>
      <input
        type='text'
        name='name'
        placeholder="Name"
        // value={this.state}
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
      <input
        type='text'
        name='message'
        placeholder="Message: I am interested in 236 B St, South San Francisco, CA 94080"
        onChange={this.myChangeHandler}
      />
      <br/>
      <label>
          <input
            name="needFinance"
            type="checkbox"
            onChange={this.checkHandler} />
            {this.state.needFinance ? 'A licensed lender will call you soon' : 'I want to talk about financing'}
        </label>
        <br />
       <ScheduleButton onClick={this.handleSubmit}>
          Request Info
        </ScheduleButton>
      {/* {this.state.errormessage} */}
      </form>
      </div>
    );
  }
}
export default UserInputMessage;