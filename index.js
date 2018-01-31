import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { EditPanel } from './src/components/JsonEditor';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>editor</h1>
      <hr /><br />
      <EditPanel />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
