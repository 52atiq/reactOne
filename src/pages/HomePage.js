import React, { Component, Fragment } from 'react'

import Analysis from "../components/Analysis/Analysis";
import ClientReview from "../components/ClientReview/ClientReview";
import Courses from "../components/Courses/Courses";
import Footer from "../components/Footer/Footer";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import Services from "../components/Services/Services";
import Summary from "../components/Summary/Summary";
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Video from "../components/Video/Video";

export default class HomePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }

    render() {
        return (
           <Fragment>
                <TopNavigation title ="Home" />
                <TopBanner />
                <Services />
                <Analysis />
                <Summary />
                <RecentProjects />
                <Courses />
                <Video />
                <ClientReview />
                <Footer />
           </Fragment>
        )
    }
}
