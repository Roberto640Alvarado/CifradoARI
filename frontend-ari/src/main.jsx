import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/App.jsx';
import './index.css';
import Routes2 from './Routes/Route';


ReactDOM.render(
    <React.StrictMode>
        {/*<App />*/}
        {/*<CardResult jsonData={jsonData} />*/}
        <Routes2/>
    </React.StrictMode>,
    document.getElementById('root')
);
//console.log('ReactDOM.render called');

