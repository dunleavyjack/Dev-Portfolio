import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        {/* <Route path="/redirect" component={StravaRedirect} />
                        <Route path="/yourdistance" component={YourDistance} />
                        <Route path="/demo" component={YourDistanceDemo} />
                        <Route path="/about" component={About} />
                        <Route component={NotFound} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default AppRouter;
