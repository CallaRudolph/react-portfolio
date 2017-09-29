import React from 'react';
import { connect } from "react-redux";

function Entry(props) {

  function handleEntry() {
    console.log(props);
  }

  return (
    <div>
      <button onClick={handleEntry}>Enter here</button>
    </div>
  );
}

export default connect()(Entry);
