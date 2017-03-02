import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './../../components/HelloWorld/HelloWorld.jsx';

if (module.hot) {
    module.hot.accept()
}
ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#root-container')
  );
