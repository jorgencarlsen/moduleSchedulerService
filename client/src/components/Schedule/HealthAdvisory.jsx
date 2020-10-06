import React, { useState } from 'react';
import styled from 'styled-components';

const WarningContainer = styled.span`
    visibility: visible;
    width: 120px;
    background-color: white;
    color: black;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;

`;

function HealthAdvisory() {
  const [isShown, setIsShown] = useState(false);

  return (
    // <div style={{border: '1px solid black'}}>
    <div>
      <div className="tooltip"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.549 26.933H4.371L15.96 3.755l11.589 23.178zM14.63 21.28v2.66h2.66v-2.66h-2.66zm0-8.585v6.643h2.66v-6.643h-2.66z" fill="#869099"></path></svg>
      Public Health Advisory
      <span className="tooltiptext">In-person tours may not currently allow for safe social distancing or comply with public health orders.</span>
      </div>
      <p> By pressing Schedule A Tour, you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use  Trulia does not endorse any real estate professionals.
      </p>
      {/* {isShown && (
      <div>
      <p>
        In-person tours may not currently allow for safe social distancing or comply with public health orders.
      </p>
      </div>
      )} */}

    </div>
  );
}
export default HealthAdvisory;