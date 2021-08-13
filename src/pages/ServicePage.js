import React, { Component, Fragment } from 'react'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Services from '../components/Services/Services'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class ServicePage extends Component {
    render() {
        return (
          <Fragment>
              <TopNavigation title="Service"  />
              <PageTop  pagetitle ="My Services" />
              <Services />
              <ContactSection />
              <Footer />
          </Fragment>
        )
    }
}
