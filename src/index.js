import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import SocialJSApp from "./App";

ReactDOM.render(
    <React.StrictMode>
        <SocialJSApp />
    </React.StrictMode>,document.getElementById('root')
);

reportWebVitals();