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
    width: 90%;
    color: rgb(255, 255, 255);
    background-color: rgb(217, 60, 35);
    border-color: transparent;
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

const InputName = styled.input`
    height: 36px;
    border-radius: 8px;
    border: 1px solid rgb(205, 209, 212);
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    width: 45%;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    ont-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    box-sizing: border-box;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
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

  render() {
    return (
      // <div style={{border: '1px solid black'}}>
      <div>
        User Input
      <form>
      <InputName
        type='text'
        name='name'
        placeholder="Name"
        // value={this.state}
        onChange={this.myChangeHandler}
      />
      <InputName
        type='tel'
        name='phone'
        placeholder="Phone"
        onChange={this.myChangeHandler}
      />
      <br/>
      <InputName style={{width: '90%'}}
        type='email'
        name='email'
        placeholder="Email"
        onChange={this.myChangeHandler}
      />
      <br/>
      <InputName style={{width: '90%', height: "78px", color: "-internal-light-dark(black, white)"}}
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