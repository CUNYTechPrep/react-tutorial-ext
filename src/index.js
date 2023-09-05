import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App_v2 from './App_v2';
import App_v3 from './App_v3';
import App_v4 from './App_v4';
import Alternative_App_v4 from './Alternative_App_v4';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Uncomment the version you want to see. */}
    <App />
    {/* <App_v2 /> */}
    {/* <App_v3 /> */}
    {/* <App_v4 /> */}
    {/* <Alternative_App_v4 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
