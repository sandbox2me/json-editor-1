import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JsonEditor from './src/components/JsonEditor';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>editor</h1>
      <hr /><br />
      <JsonEditor />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
