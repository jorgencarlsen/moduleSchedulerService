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

    &:hover {



    }

`;

class ScheduleATour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourType: 'In-Person',
      displayDates: [],
      isShown: false,
    };
    this.handlePersonClick = this.handlePersonClick.bind(this);
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.createDates = this.createDates.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handlePersonClick() {
    this.setState({tourType: 'In-Person'});
  }

  handleVideoClick() {
    this.setState({tourType: 'Video chat'});
  }

  handleHover() {
    this.setState({isShown: !this.state.isShown})
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
      // <div style={{border: '1px solid black'}}>
      <div>
      <div>
        <div className="tooltip1" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        Tour Type <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.96 27.93c-6.61 0-11.97-5.36-11.97-11.97S9.35 3.99 15.96 3.99s11.97 5.36 11.97 11.97-5.36 11.97-11.97 11.97zm0-2.66a9.31 9.31 0 1 0 0-18.62 9.31 9.31 0 0 0 0 18.62zm-1.33-4.51h2.66v2.66h-2.66v-2.66zm2.66-2.16h-2.66v-3.97h1.33a1.664 1.664 0 0 0 0-3.325c-.465 0-.897.19-1.21.523l-.912.968-1.936-1.824.912-.968a4.324 4.324 0 1 1 4.476 7.077V18.6z" fill="#869099"></path></svg>
        <span className="tooltiptext1">
        If you’d like to tour this home without leaving yours, select the virtual tour type  and discuss available options with the agent you are connected with.
        </span>
        </div>
      </div>
        {/* {this.state.isShown && (
        <div>
        <p>
        onHover: If you’d like to tour this home without leaving /n yours, select the virtual tour type /n  and discuss available options with the agent you are /n connected with.
        </p>
        </div>
        )} */}
        <div>
        <TourTypeButton onClick={this.handlePersonClick}>In-Person</TourTypeButton>
        <TourTypeButton onClick={this.handleVideoClick}>Video Chat</TourTypeButton>
        </div>
        <br></br>
        <div>
        <DateSelect days={this.state.displayDates} type={this.state.tourType}/>
        </div>
        <div>
        <HealthAdvisory/>
        </div>
      </div>
    );
  }
}
export default ScheduleATour;