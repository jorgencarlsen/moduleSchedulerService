import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UserInputMessage from './UserInputMessage.jsx'
import styled from 'styled-components';

const AgentContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    outline: none;
    box-sizing: border-box;

`;

const InnerContainer1 = styled.div`
    padding-top: 8px;
    display: block;
    outline: none;
    box-sizing: border-box;

`;

const InnerContainer2 = styled.div`
    padding: 0px 24px;
    display: block;
    outline: none;
    box-sizing: border-box;

`;

const InnerContainer3 = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    outline: none;
    box-sizing: border-box;
`;

const PhotoTextCotnainer = styled.div`
    padding: 0px 8px;
    outline: none;
    box-sizing: border-box;
    display: block;
`;

const InnerPhotoTextCotnainer = styled.div`
    text-align: center;
    width: 42px;
    position: relative;
    outline: none;
    box-sizing: border-box;
    display: block;

`;

const PhotoCotnainer = styled.div`
    border: 3px solid transparent;
    width: 40px;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    display: block;
    text-align: center;
    width: 42px;
    position: relative;

`;
const TextCotnainer = styled.div`
    color: rgb(134, 144, 153);
    font-size: 12px;
    line-height: 1.33;
    outline: none;
    box-sizing: border-box;
    display: block;
    text-align: center;
    width: 42px;
    position: relative;

`;

const PhotoInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 0px;
    z-index: -1;
    width: 30px;
    height: 30px;
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    line-height: 1.5;
    outline: none;
    box-sizing: border-box;
    background-color: initial;
    cursor: default;
    appearance: radio;
    margin: 3px 3px 0px 5px;
    padding: initial;
    border: initial;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
`;

const HoverContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    /* padding: 5px; */
`;

const HoverInner1 = styled.div`
    /* padding: 5px; */
    font-size: 15px;
    text-align: center;
`;

const HoverInner2 = styled.div`
    /* padding: 5px; */
    float:left;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 4;
`;

const Stars = styled.div`
  float:left;
  /* align-items: left; */
  /* background: #333; */
  color: gold;
  /* display: flex; */
  font-size: 15px;
  height: 5vh;
  /* justify-content: center; */

`;



class AgentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      topAgents: [],
      selectedAgentId: '',
    };
    this.getTopAgents = this.getTopAgents.bind(this);
    this.onAgentClick = this.onAgentClick.bind(this);
  }

  getTopAgents() {
    axios.get('/api/agentInfo')
      .then((response) => {
        this.setState({
          loading: false,
          topAgents: response.data,
          selectedAgentId: response.data[0].agentId.toString()
        });
      })
      .catch((error) => console.log(error));
  }

  onAgentClick(event) {
    this.setState({selectedAgentId: event.currentTarget.value});

  }

  componentDidMount() {
    this.getTopAgents()
  }

  render() {
    if(this.state.loading) {
      return (<div>loading...</div>
        );
      }
      const agent = this.state.topAgents;
    return (
      // <div style={{border: '1px solid black'}}>
      <div>
        Agent Select
        <div className='Agent'>
          <table>
            <tbody>
            <tr>
          {this.state.topAgents.map((agent, index) => {
            return (
            <td key={index}>
              <button className="tooltip1" onClick={this.onAgentClick} value={agent.agentId.toString()}>
                <img src={agent.picture} height='25' width='25'/>
                <span className="tooltiptext1">
                <HoverContainer>
                  <HoverInner2>
                  <img src={agent.picture} height='75' width='75'/>
                  </HoverInner2>
                  <HoverInner1>
                    {agent.name}
                  </HoverInner1>
                  <HoverInner1>
                  <Stars>★★★★★</Stars>
                  ({agent.ratingCount})
                  {/* {agent.avgRating} */}
                  </HoverInner1>

                  <HoverInner1>
                    {agent.agentType}
                  </HoverInner1>

                    <HoverInner1>
                    {agent.recSalesCount} Recent Sales
                    </HoverInner1>

                  <HoverInner1>
                    {agent.phone}
                  </HoverInner1>

                </HoverContainer>
                </span>
              </button>
              <br></br>
                  {agent.agentType.substring(0, 8)}
                  <br></br>
                  {agent.agentType.substring(agent.agentType.length - 5)}
            </td>
            );
          })
        }
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default AgentInfo;