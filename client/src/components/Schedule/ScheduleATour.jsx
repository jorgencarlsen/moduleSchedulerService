import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DateSelect from './DateSelect.jsx'
import HealthAdvisory from './HealthAdvisory.jsx'
import styled from 'styled-components';

const TourTypeButton = styled.button`
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: 0px;
    flex: 1 1 auto;
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
    color: rgb(59, 65, 68);
    background-color: rgb(255, 255, 255);
    border-color: rgb(205, 209, 212);
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    box-sizing: border-box;
    appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    align-items: flex-start;
    border-image: initial;
`;

class ScheduleATour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourType: 'In-Person',
      displayDates: [],
    };
    this.handlePersonClick = this.handlePersonClick.bind(this);
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.createDates = this.createDates.bind(this);
  }

  handlePersonClick() {
    this.setState({tourType: 'In-Person'});
  }

  handleVideoClick() {
    this.setState({tourType: 'Video chat'});
  }

  createDates() {
    const dateArray = [];
    const today = new Date()
    for (var i = 0; i < 8; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(nextDay.getDate() + i);
      const dayString = nextDay.toLocaleDateString(
        'en-gb',
        {
          month: 'short',
          day: 'numeric',
          weekday: 'short'
        });
      dateArray.push(dayString)
    }
    this.setState({
      displayDates:dateArray
    })
  }

  componentDidMount() {
    this.createDates();
  }

  render() {
    return (
      <div style={{border: '1px solid black'}}>
        Schedule A Tour
        <br></br>
        Tour Type?
        <p>
        onHover: If you’d like to tour this home without leaving /n yours, select the virtual tour type /n  and discuss available options with the agent you are /n connected with.
        </p>
        <TourTypeButton onClick={this.handlePersonClick}>In-Person</TourTypeButton>
        <TourTypeButton onClick={this.handleVideoClick}>Video Chat</TourTypeButton>
        {/* <button onClick={this.handlePersonClick}>In-Person</button> */}
        {/* <button onClick={this.handleVideoClick}>Video Chat</button> */}
        <DateSelect days={this.state.displayDates} type={this.state.tourType}/>
        <HealthAdvisory/>
      </div>
    );
  }
}
export default ScheduleATour;