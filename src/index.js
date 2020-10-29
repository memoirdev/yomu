import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/_app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  getOrCreate('yomu-root')
);


function getOrCreate(id = 'yomu-root'){
  let element = document.getElementById(id);
  if(element === null){
    element = document.createElement('div');
    element.setAttribute('id', id)
    document.body.appendChild(element);
  }
  return element;
}