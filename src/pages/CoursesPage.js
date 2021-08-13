import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class CoursesPage extends Component {
    render() {
        return (
           <Fragment>
            <TopNavigation  title="Course" />
            <PageTop  pagetitle="All Courses" />
            <AllCourses />
            <Footer />

           </Fragment>
        )
    }
}