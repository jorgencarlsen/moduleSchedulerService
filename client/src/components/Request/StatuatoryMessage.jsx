import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class StatuatoryMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      // shouldRefresh: false;
    };
    // this.getTop = this.getTop.bind(this);
  }

  render() {
    return (
      // <div style={{border: '1px solid black'}}>
      <div>
        <p> By pressing Schedule A Tour, you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use  Trulia does not endorse any real estate professionals.
        </p>
      </div>
    );
  }
}
export default StatuatoryMessage;