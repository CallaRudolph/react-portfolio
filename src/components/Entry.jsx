import React from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio } from './../actions';
import { Button } from 'react-bootstrap';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.handleEntry = this.handleEntry.bind(this);
  }

  handleEntry() {
    this.props.dispatch(fetchPortfolio());
  }

  render () {
    var button = {
      backgroundColor: "#FF331F",
      color: "white"
    }
    return (
      <div>
        <Button style={button}
                bsSize="large"
                block
                onClick={this.handleEntry}>
                welcome... who am i ?
        </Button>
      </div>
    );
  }
}

export default connect()(Entry);
