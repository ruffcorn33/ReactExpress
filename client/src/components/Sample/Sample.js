import React, { Component } from 'react';
import './Sample.css';

class Sample extends Component {
  constructor() {
    super();
    this.state = {
      sample_data: []
    };
  }

  componentDidMount() {
    fetch('/api/sample_data')
      .then(res => res.json())
      .then(sample_data => this.setState({sample_data}, () => console.log('Sample Data fetched...', sample_data)));
  }

  render() {
    return (
      <div>
        <h2>Sample Data</h2>
        <ul>
            {this.state.sample_data.map(sample_datum =>
                <li key={sample_datum.key}>{sample_datum.value}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default Sample;
