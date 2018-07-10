import React from 'react';
import ReactDOM from 'react-dom';
import HelloReact from './components/HelloReact';

import './styles/main.scss';

ReactDOM.render(
  <div>
    <HelloReact text="World" />
    <HelloReact text="Bai" />
    <HelloReact />
  </div>,
  document.getElementById('root'),
);
