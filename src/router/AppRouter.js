import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/Hello/HomePage';
import WritingPage from '../pages/Writing/WritingPage';
import ProjectPage from '../pages/ProjectDisplay/ProjectPage';
import ExperiencePage from '../pages/Experience/ExperiencePage';
import ContactPage from '../pages/Contact/ContactPage';
import MoodRingPage from '../components/projects/MoodRingPage';
import SseuregiClubPage from '../components/projects/SseuregiClubPage';
import VeryFarPage from '../components/projects/VeryFarPage';

class AppRouter extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <BrowserRouter>
                    <div className="main">
                        <Switch>
                            <Route path="/" component={HomePage} exact={true} />
                            <Route path="/projects" component={ProjectPage} />
                            <Route
                                path="/experience"
                                component={ExperiencePage}
                            />
                            <Route path="/contact" component={ContactPage} />
                            <Route
                                path="/sseuregiclub"
                                component={SseuregiClubPage}
                            />
                            <Route path="/moodring" component={MoodRingPage} />
                            <Route path="/writing" component={WritingPage} />
                            <Route
                                path="/veryveryfar"
                                component={VeryFarPage}
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </>
        );
    }
}
export default AppRouter;
