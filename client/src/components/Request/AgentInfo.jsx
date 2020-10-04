import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UserInputMessage from './UserInputMessage.jsx'

class AgentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      topAgents: [],
      selectedAgentId: '',
      isShown1: false,
      isShown2: false,
      isShown3: false,
      isShown4: false,
    };
    this.getTopAgents = this.getTopAgents.bind(this);
    this.onAgentClick = this.onAgentClick.bind(this);
    this.handleHover1 = this.handleHover1.bind(this);
    this.handleHover2 = this.handleHover2.bind(this);
    this.handleHover3 = this.handleHover3.bind(this);
    this.handleHover4 = this.handleHover4.bind(this);
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

  handleHover1(event) {
    this.setState({isShown1: !this.state.isShown1})
  }

  handleHover2(event) {
    this.setState({isShown2: !this.state.isShown2})
  }

  handleHover3(event) {
    this.setState({isShown3: !this.state.isShown3})
  }

  handleHover4(event) {
    this.setState({isShown4: !this.state.isShown4})
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
          {/* {this.state.topAgents.map((agent, index) => {
            return ( */}
            <td >
              <button onClick={this.onAgentClick} value={agent[0].agentId.toString()} onMouseEnter={this.handleHover1} onMouseLeave={this.handleHover1}>
                <img src={agent[0].picture} height='75' width='75'/>
              </button>
              <br></br>
                  {agent[0].agentType}
            </td>
            <td >
              <button onClick={this.onAgentClick} value={agent[1].agentId.toString()} onMouseEnter={this.handleHover2} onMouseLeave={this.handleHover2}>
                <img src={agent[1].picture} height='75' width='75'/>
              </button>
              <br></br>
                  {agent[1].agentType}
            </td>
            <td >
              <button onClick={this.onAgentClick} value={agent[2].agentId.toString()} onMouseEnter={this.handleHover3} onMouseLeave={this.handleHover3}>
                <img src={agent[2].picture} height='75' width='75'/>
              </button>
              <br></br>
                  {agent[2].agentType}
            </td>
            <td >
              <button onClick={this.onAgentClick} value={agent[3].agentId.toString()} onMouseEnter={this.handleHover4} onMouseLeave={this.handleHover4}>
                <img src={agent[3].picture} height='75' width='75'/>
              </button>
              <br></br>
                  {agent[3].agentType}
            </td>
            {/* );
          })} */}
            </tr>
          <tr>
            <td>
                            {this.state.isShown1 && (
                              <div>
                            <img src={agent[0].picture} height='75' width='75'/>
                            <br></br>
                            {agent[0].agentType}
                            <br></br>
                            {agent[0].name}
                            <br></br>
                            {agent[0].phone}
                            <br></br>
                            {agent[0].avgRating} ({agent[0].ratingCount})
                            <br></br>
                            {agent[0].recSalesCount}
                            </div>
                            )}
                            {this.state.isShown2 && (
                              <div>
                            <img src={agent[1].picture} height='75' width='75'/>
                            <br></br>
                            {agent[1].agentType}
                            <br></br>
                            {agent[1].name}
                            <br></br>
                            {agent[1].phone}
                            <br></br>
                            {agent[1].avgRating} ({agent[1].ratingCount})
                            <br></br>
                            {agent[1].recSalesCount}
                            </div>
                            )}
                            {this.state.isShown3 && (
                              <div>
                            <img src={agent[2].picture} height='75' width='75'/>
                            <br></br>
                            {agent[2].agentType}
                            <br></br>
                            {agent[2].name}
                            <br></br>
                            {agent[2].phone}
                            <br></br>
                            {agent[2].avgRating} ({agent[2].ratingCount})
                            <br></br>
                            {agent[2].recSalesCount}
                            </div>
                            )}
                            {this.state.isShown4 && (
                              <div>
                            <img src={agent[3].picture} height='75' width='75'/>
                            <br></br>
                            {agent[3].agentType}
                            <br></br>
                            {agent[3].name}
                            <br></br>
                            {agent[3].phone}
                            <br></br>
                            {agent[3].avgRating} ({agent[3].ratingCount})
                            <br></br>
                            {agent[3].recSalesCount}
                            </div>
                            )}
            </td>
          </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default AgentInfo;