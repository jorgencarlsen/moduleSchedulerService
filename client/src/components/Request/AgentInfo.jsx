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
    return (
      <div style={{border: '1px solid black'}}>
        Agent Select
        <div className='Agent'>
          <table>
            <tbody>
            <tr>
          {this.state.topAgents.map((agent, index) => {
            return (
            <td key={index}>
              <button onClick={this.onAgentClick} value={agent.agentId.toString()}>
                <img src={agent.picture} height='75' width='75'/>
              </button>
              <br></br>
                  {agent.agentType}
                  <br></br>
                  onHover
                  <br></br>
                  {agent.name}
                  <br></br>
                  {agent.phone}
                  <br></br>
                  {agent.avgRating} ({agent.ratingCount})
                  <br></br>
                  {agent.recSalesCount}
            </td>
            );
          })}
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default AgentInfo;