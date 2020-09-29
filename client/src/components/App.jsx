import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RequestInfo from './RequestInfo.jsx';
import ScheduleATour from './ScheduleATour.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      // shouldRefresh: false;
    };
    // this.getTop = this.getTop.bind(this);
  }

  getTop() {
    axios.get('/repos')
      .then((response) => {
        console.log(3);
        console.log(response.data);
        this.setState({
          repos: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  // componentDidMount() {
  //   // this.state.shouldRefresh = false;
  //   // getTop();
  //   axios.get('/repos')
  //   .then((response) => {
  //     console.log(3)
  //     console.log(response.data)
  //     this.setState({
  //       repos: response.data
  //     })
  //   })
  //   .catch((error) => console.log(error))
  // }

  // refresh() {
  //   if (this.state.shouldRefresh) {
  //     axios.get('/repos')
  //     .then()
  //   }
  // }

  search(term) {
    console.log(`${term} was searched`);
    axios.post('/repos', { userHandle: term })
    // .then((response) => console.log(response))
      .then((response) => getTop())
      .catch((error) => console.log(error));
    // TODO
  }

  render() {
    return (
      <div>
        <button>
          Schedule A Tour
        </button>
        <ScheduleATour/>
        <br/>
        <button>
          Request Info.
        </button>
        <RequestInfo/>
      </div>
    );
  }
}
export default App;
