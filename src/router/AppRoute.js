import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CoursesPage from '../pages/CoursesPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import ServicePage from '../pages/ServicePage';
import TermsPage from '../pages/TermsPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage'
import CourseDetailsPage from '../pages/CourseDetailsPage';
export default class AppRoute extends Component {
    render() {
        return (

           <Fragment>
               <Switch>
                   <Route exact path="/"   component={HomePage}   />
                   <Route exact path="/service"   component={ServicePage}   />
                   <Route exact path="/course"   component={CoursesPage}   />
                   <Route exact path="/portfolio"   component={PortfolioPage}   />
                   <Route exact path="/contact"   component={ContactPage}   />
                   <Route exact path="/about"   component={AboutPage}   />
                   <Route exact path="/Refund"   component={RefundPage}   />
                   <Route exact path="/Terms"   component={TermsPage}   />
                   <Route exact path="/Privacy"   component={PrivacyPage}   />
                   <Route exact path="/ProjectDetails"   component={ProjectDetailsPage}   />
                   <Route exact path="/CourseDetails"   component={CourseDetailsPage}   />


               </Switch>

           </Fragment>
        )
    }
}
