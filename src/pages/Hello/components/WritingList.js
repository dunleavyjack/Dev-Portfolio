import React from 'react';
import Article from '../../../components/Article';

const Experience = () => {
    return (
        <div className="experience-container">
            <Article
                title={'Build a Recycling Bin Finder With React'}
                sub="A public trash and recycling bin finder for Seoul built with React, Node.js, and the Kakao Maps API."
                description={'JavaScript in Plain English | August 2021'}
                link={
                    'https://javascript.plainenglish.io/building-a-recycling-bin-finder-with-react-ba08cf09bda5'
                }
            />
            <Article
                title={'How to Use React to Make Your Images Responsive'}
                sub="Accelerate your application's load times using responsive images."
                description={'JavaScript In Plain English | April 2021'}
                link={
                    'https://javascript.plainenglish.io/use-react-to-make-your-images-responsive-a5e6791f19f0'
                }
            />
            <Article
                title={'Using Redux for State Management'}
                sub="Avoid prop drilling in your React project by keeping everything in one place."
                description={'CodeX | April 2021'}
                link={
                    'https://medium.com/codex/using-redux-for-state-management-e35de874e125'
                }
            />
            <Article
                title={
                    'How I Built a React Web App that tracks User Fitness with Strava'
                }
                sub="A mobile-first React web app that connects with a user’s Strava account to examine their total running, cycling, and swimming distances."
                description={'JavaScript in Plain English | April 2021'}
                link={
                    'https://javascript.plainenglish.io/portfolio-project-very-very-far-f77d1241a626'
                }
            />
            <Article
                title={'Building a Mood Detector With the Spotify API'}
                sub="A mobile-first React web app that determines a user’s mood based on their recently played music on Spotify."
                description={'JavaScript in Plain English | April 2021'}
                link={
                    'https://javascript.plainenglish.io/portfolio-project-spotify-mood-ring-dba09b6da1e0'
                }
            />
            <Article
                title={'Host Your Web App with Vercel'}
                sub="You’ve finished a personal project and you want to share it with the world. What’s the next step?"
                description={'JavaScript in Plain English | April 2021'}
                link={
                    'https://javascript.plainenglish.io/hosting-your-web-app-with-vercel-8ef3f1fbb5ff'
                }
            />
            <Article
                title={
                    'Add Strava OAuth2 Login to Your React App In 15 Minutes'
                }
                sub="Get started with the powerful Strava API. The guide I wish I had."
                description={'Level Up Coding  | March 2021'}
                link={
                    'https://levelup.gitconnected.com/add-strava-oauth2-login-to-your-react-app-in-15-minutes-6c92e845919e'
                }
            />
            <Article
                title={'Make Your First Chrome Extension With Javascript'}
                sub="Chrome extensions are a useful way to personalize your browser experience and making your own is a great project for beginners and experts alike."
                description={'Level Up Coding  | October 2020'}
                link={
                    'https://levelup.gitconnected.com/make-your-first-chrome-extension-with-javascript-7aa383db2b03'
                }
            />
            <Article
                title={'Make an AR Instagram Filter with JavaScript'}
                sub="Use the powerful Spark AR studio to make your own filter Instagram."
                description={'The StartUp | October 2020'}
                link={
                    'https://medium.com/swlh/spark-ar-tutorial-making-a-which-are-you-instagram-filter-with-javascript-f7eaeee54b6f'
                }
            />
        </div>
    );
};

export default Experience;
