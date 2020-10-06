import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RequestInfo from './Request/RequestInfo.jsx';
import ScheduleATour from './Schedule/ScheduleATour.jsx';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid green;
    border-style: solid;
    border-color: transparent;
    border-width: 16px 8px 0px;
    width: 33.4%;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    display: block;
    outline: none;
    box-sizing: border-box;
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    color: rgb(59, 65, 68);
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.1px;
    /* box-shadow: rgba(59, 65, 68, 0.18) 0px 17px 21px -1px; */
  `;

const InnerContainer = styled.div`
    margin-top: 24px;
    outline: none;
    box-sizing: border-box;
    display: block;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    outline: none;
    box-sizing: border-box;
`;
const BlokContainer = styled.div`
    box-shadow: rgba(59, 65, 68, 0.18) 0px 17px 21px -1px;
    border-radius: 8px 0px 8px 8px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(232, 233, 234);
    padding: 0px;
    display: flex;
    flex-direction: column;
    /* overflow: auto; */
    outline: none;
    box-sizing: border-box;
`;


 const OptionButton = styled.button`
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequestInfo: false,
    };
    this.handleInfoClick = this.handleInfoClick.bind(this);
    this.handleTourClick = this.handleTourClick.bind(this);
  }

  handleTourClick() {
    this.setState({isRequestInfo: false});
  }

  handleInfoClick() {
    this.setState({isRequestInfo: true});
  }

  render() {
    const isRequestInfo = this.state.isRequestInfo;
    let display;
    isRequestInfo ? display = <RequestInfo/> : display = <ScheduleATour/> ;

    return (
      <Container>
        <InnerContainer>
          <ButtonContainer>
            <OptionButton onClick={this.handleTourClick}>
              Schedule A Tour
            </OptionButton>
            <OptionButton onClick={this.handleInfoClick}>
              Request Info.
            </OptionButton>
          </ButtonContainer>
          <BlokContainer>
            {display}
          </BlokContainer>
        </InnerContainer>
      </Container>
    );
  }
}
export default App;
