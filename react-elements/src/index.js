import React from 'react';
import * as ReactDOM from 'react-dom/client';

const heading = React.createElement(
  'h1',
  null,
  ['Hello, React!']
);

console.log(heading);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(heading);
