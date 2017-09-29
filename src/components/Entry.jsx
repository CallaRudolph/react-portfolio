import React from 'react';

function Entry(props) {

  function handleEntry() {
    console.log("button clicked");
  }

  return (
    <div>
      <button onClick={handleEntry}>Enter here</button>
    </div>
  );
}

export default Entry;
