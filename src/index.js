import React from 'react';
import ReactDom from 'react-dom';

import AppRouter from './router/AppRouter';

ReactDom.render(
    <>
        <AppRouter />
    </>,
    document.getElementById('root')
);
