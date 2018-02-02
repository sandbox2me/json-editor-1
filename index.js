import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React, {PureComponent} from 'react';
import _ from 'lodash';
import './index.css';
import JsonEditor from './src/components/JsonEditor';
import {MODE} from './src/constants';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: 'close',
    };
  }

  toggle = () => {
    this.setState({
      status: this.state.status === 'close' ? 'open' : 'close',
    });
  };

  render() {
    const {status} = this.state;
    return (
      <div style={{margin: 100}}>
        <h1>Json-editor Demo</h1>
        <hr />
        <br />
        <JsonEditor
          mode={MODE.PAGE}
          status={status}
          onToggle={this.toggle}
          header={<p key="jsonEditorHeader">名称: Hello world</p>}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
