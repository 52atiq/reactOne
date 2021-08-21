import React, { Component } from 'react'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import RefundDescription from '../components/RefundDescription/RefundDescription'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class RefundPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }

    render() {
        return (
           <Fragment>
               <TopNavigation title="Refund" />
               <PageTop  pagetitle="Refund Policy" />
               <RefundDescription />
               <Footer />
           </Fragment>
        )
    }
}
