import React, { useState } from 'react';


function HealthAdvisory() {
  const [isShown, setIsShown] = useState(false);

  return (
    // <div style={{border: '1px solid black'}}>
    <div>
      <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      !!!Public Health Advisory
      </div>
      <p> By pressing Schedule A Tour, you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use  Trulia does not endorse any real estate professionals.
      </p>
      {isShown && (
      <div>
      <p>
        In-person tours may not currently allow for safe social distancing or comply with public health orders.
      </p>
      </div>
      )}

    </div>
  );
}
export default HealthAdvisory;