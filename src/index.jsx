import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*import { Router } from 'react-router';


ReactDOM.render(
  <Router>
<App />
  </Router>,
  document.getElementById("root")
);*/

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />

);


reportWebVitals();
