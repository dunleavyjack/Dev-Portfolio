import React from 'react';
import ReactDom from 'react-dom';
import './styles/stylesheet.css';
import './styles/header.css';
import './styles/navbar.css';
import './styles/projectpage.css';
import './styles/contactpage.css';
import './styles/experiencepage.css';
import AppRouter from './router/AppRouter';

ReactDom.render(
    <>
        <AppRouter />
    </>,
    document.getElementById('root')
);
