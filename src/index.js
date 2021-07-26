import React from 'react';
import ReactDom from 'react-dom';
import './styles/stylesheet.css';
import './styles/header.css';
import './styles/navbar.css';
import './styles/productpage.css';
import AppRouter from './router/AppRouter';

ReactDom.render(
    <>
        <AppRouter />
    </>,
    document.getElementById('root')
);
