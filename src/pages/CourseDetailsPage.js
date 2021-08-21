import React, { Component } from 'react'
import { Fragment } from 'react'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class CourseDetailsPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }

    render() {
        return (
           <Fragment>
               <TopNavigation  title="Course Details"/>
               {/* <PageTop /> */}
               <CourseDetails />
               <Footer />
           </Fragment>
        )
    }
}
