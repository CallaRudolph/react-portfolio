import React from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from './../actions';

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.handleRepos = this.handleRepos.bind(this);
  }

  handleRepos() {
    this.props.dispatch(fetchRepos());
  }

  render () {
    return (
      <div>
        <button onClick={this.handleRepos}>See some projects</button>
      </div>
    );
  }
}

export default connect()(Repos);
