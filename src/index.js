import React from 'react';
import ReactDom from 'react-dom';
import './styles/stylesheet.css';
import './styles/header.css';
import AppRouter from './router/AppRouter';

ReactDom.render(
    <>
        <AppRouter />
    </>,
    document.getElementById('root')
);
