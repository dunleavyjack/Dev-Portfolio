import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ExperiencePage from '../pages/ExperiencePage';
import ContactPage from '../pages/ContactPage';
import MoodRingPage from '../pages/projects/MoodRingPage';
import SseuregiClubPage from '../pages/projects/SseuregiClubPage';
import VeryFarPage from '../pages/projects/VeryFarPage';
import Drawer from '../components/Drawer';

class AppRouter extends React.Component {
    render() {
        return (
            <>
                {/* <Drawer /> */}
                <Navbar />
                <BrowserRouter>
                    <div className="main">
                        <Switch>
                            <Route path="/" component={HomePage} exact={true} />
                            <Route path="/projects" component={ProjectsPage} />
                            <Route
                                path="/experience"
                                component={ExperiencePage}
                            />
                            <Route path="/contact" component={ContactPage} />
                            <Route
                                path="/projects/sseuregiclub"
                                component={SseuregiClubPage}
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </>
        );
    }
}
export default AppRouter;
