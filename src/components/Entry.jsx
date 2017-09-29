import React from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio } from './../actions';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.handleEntry = this.handleEntry.bind(this);
  }

  handleEntry() {
    this.props.dispatch(fetchPortfolio());
  }

  render () {
    return (
      <div>
        <button onClick={this.handleEntry}>Enter here</button>
      </div>
    );
  }
}

export default connect()(Entry);
