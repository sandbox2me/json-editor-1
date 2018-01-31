import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React, { PureComponent } from 'react';
import _ from 'lodash';
import './index.css';
import JsonEditor from './src/components/JsonEditor';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: 'close',
    };
  }

  toggle = () => {
    this.setState({
      status: this.state.status === 'close' ? 'open' : 'close'
    });
  }

  render() {
    const { status } = this.state;
    return (
      <div style={{ margin: 100 }}>
        <h1>editor</h1>
        <hr /><br />
        <JsonEditor status={status} onToggle={this.toggle} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
