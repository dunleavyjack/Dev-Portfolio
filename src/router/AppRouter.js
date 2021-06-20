import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import WritingPage from '../pages/WritingPage';
import ContactPage from '../pages/ContactPage';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/projects" component={ProjectsPage} />
                        <Route path="/writing" component={WritingPage} />
                        <Route path="/contact" component={ContactPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default AppRouter;
