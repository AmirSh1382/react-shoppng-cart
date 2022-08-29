import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// React-Router-Dom for SPA
import { BrowserRouter } from 'react-router-dom';

// Bootstrap CSS StyleSheet
import "../node_modules/bootstrap/dist//css/bootstrap.min.css"

// Bootstrap Icon
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);