
import React from 'react';
import ReactDOM from 'react-dom';
// import Search from './components/Search.jsx';
// import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
      // shouldRefresh: false;
    }
    // this.getTop = this.getTop.bind(this);

  }

  getTop() {
    axios.get('/repos')
    .then((response) => {
      console.log(3)
      console.log(response.data)
      this.setState({
        repos: response.data
      })
    })
    .catch((error) => console.log(error))
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


  search (term) {
    console.log(`${term} was searched`);
    axios.post('/repos', {userHandle: term})
    // .then((response) => console.log(response))
    .then((response) => getTop())
    .catch((error) => console.log(error))
    // TODO
  }

  render () {
    return (<div>
      <h1> Realia</h1>
      {/* <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/> */}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));