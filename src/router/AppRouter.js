import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../pages/Hello/HomePage';
import WritingPage from '../pages/Writing/WritingPage';
import ProjectPage from '../pages/ProjectDisplay/ProjectPage';
import ExperiencePage from '../pages/Experience/ExperiencePage';
import ContactPage from '../pages/Contact/ContactPage';

import CTCovidDaily from '../components/projects/CTCovidDaily';
import MoodRingPage from '../components/projects/MoodRingPage';
import SseuregiClubPage from '../components/projects/SseuregiClubPage';
import VeryFarPage from '../components/projects/VeryFarPage';
import FourForTenPage from '../components/projects/FourForTenPage';
import IGFilterPage from '../components/projects/IGFilterPage';
import ScoreDogPage from '../components/projects/ScoreDogPage';
import DassetProductPages from '../components/work/Dasset/ProductPages';

class AppRouter extends React.Component {
    render() {
        return (
            <div className="main-container">
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
                            <Route
                                path="/coviddaily"
                                component={CTCovidDaily}
                            />
                            <Route
                                path="/fourforten"
                                component={FourForTenPage}
                            />
                            <Route path="/igfilter" component={IGFilterPage} />
                            <Route path="/scoredog" component={ScoreDogPage} />
                            <Route
                                path="/cryptopages"
                                component={DassetProductPages}
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}
export default AppRouter;
