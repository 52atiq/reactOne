import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router';
import ContactSection from '../components/ContactSection/ContactSection';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CoursesPage from '../pages/CoursesPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import ServicePage from '../pages/ServicePage';
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

               </Switch>

           </Fragment>
        )
    }
}
