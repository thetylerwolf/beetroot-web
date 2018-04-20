import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default class About extends Component {

  render() {

    return (

      <div>

        <Grid fluid className="about-section">

          <Row around="xs"  className="content-section">
            <Col xs={ 10 }>
              <h4 className="section-header">About</h4>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <h3 className="headline">We help businesses grow by elevating their digital&nbsp;experience.</h3>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <p className="section-description">
                Success in todays digital environment requires a focus on the user,
                addressing their needs first. Beetroot designs and builds digital experiences
                that attract and retain customers, making your business indispensible in their eyes.
                We do this by leveraging our past work building powerful software,
                designing impactful experiences and establishing effective operational processes.
                The end result is a product that turns your customers into fans.
              </p>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <h3 className="section-header">Blockchain Applications</h3>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <p className="section-description">
                Beetroot brings years of experience working on blockchain-based applications.
                This includes distributed applications (dApps), smart contracts and traditional
                web and mobile apps that interact with a blockchain. We provide both app development
                and generalized consulting on Blockchain applications.
              </p>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <p className="section-description">
                Learn more on our <a href="/blockchain">Blockchain page</a>.
              </p>
            </Col>
          </Row>

        </Grid>

        <Grid fluid className="about-section">


          <Row around="xs" className="content-section">
            <Col xs={ 10 }>
              <h4 className="section-header">Services</h4>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <Row between="xs">

                <Col xs={ 12 } md={ 4 }>

                  <h3 className="services-title">Strategy</h3>

                  <ul className="services-list">
                    <li>Product Roadmapping</li>
                    <li>User Research</li>
                    <li>Market Research</li>
                    <li>Digital Marketing</li>
                    <li>Data Analysis</li>
                  </ul>

                </Col>

                <Col xs={ 12 } md={ 4 }>

                  <h3 className="services-title">Design</h3>

                  <ul className="services-list">
                    <li>User Experience</li>
                    <li>Responsive Homepages</li>
                    <li>Mobile</li>
                    <li>Data Visualization</li>
                    <li>Innovation Design</li>
                  </ul>

                </Col>

                <Col xs={ 12 } md={ 4 }>

                  <h3 className="services-title">Technology</h3>

                  <ul className="services-list">
                    <li>Technology Roadmapping</li>
                    <li>AR/VR Apps</li>
                    <li>Creative Code</li>
                    <li>Blockchain Apps</li>
                    <li>Web & Mobile Apps</li>
                  </ul>

                </Col>

              </Row>
            </Col>
          </Row>



        </Grid>

        <Grid fluid className="about-section" id="contact">

          <Row around="xs" className="content-section">
            <Col xs={ 10 }>
              <h4 className="section-header">Contact</h4>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <p className="section-description">For inquiries, contact us at</p>
              <p className="email"><a href="mailto:hello@beetroot.digital">hello@beetroot.digital</a></p>
            </Col>
          </Row>

        </Grid>


      </div>

    )

  }

}