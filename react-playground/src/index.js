import React from 'react'; 
// import App from './App'; 
import ReactDom from 'react-dom';
import './index.css';
import AppLang from './lang-context/AppLang'; 

// ReactDom.render(<App />, document.getElementById('root'));
ReactDom.render(
  <AppLang />,
  document.getElementById('root')
);