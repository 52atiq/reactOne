import React, { Component } from 'react'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TermsDescription from '../components/TermsDescription/TermsDescription'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class TermsPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }

    render() {

        return (
           <Fragment>
               <TopNavigation title="Term & Condition " />
               <PageTop pagetitle="Terms & Condition" />
               <TermsDescription />
               <Footer />
           </Fragment>
        )
    }
}
