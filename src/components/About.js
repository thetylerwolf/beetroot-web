import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import Clients from './Clients'

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
              {/*<Link to="/blockchain" className="invisible">Learn More</Link>*/}
            </Col>
          </Row>
        {/*
          <Row around="xs">
            <Col xs={ 10 }>
              <p className="section-description">
                Learn more on our <a href="/blockchain">Blockchain page</a>.
              </p>
            </Col>
          </Row>
        */}

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

                  <h3 className="services-title">Product</h3>

                  <ul className="services-list">
                    <li>Product Strategy</li>
                    <li>Experience Design</li>
                    <li>Visual Design</li>
                  </ul>

                </Col>

                <Col xs={ 12 } md={ 4 }>

                  <h3 className="services-title">Data Visualization</h3>

                  <ul className="services-list">
                    <li>Data Processing</li>
                    <li>Visualization Design</li>
                    <li>Development</li>
                  </ul>

                </Col>

                <Col xs={ 12 } md={ 4 }>

                  <h3 className="services-title">Creative Technology</h3>

                  <ul className="services-list">
                    <li>3D</li>
                    <li>AR/VR</li>
                    <li>Creative Experiences</li>
                  </ul>

                </Col>

              </Row>
            </Col>
          </Row>



        </Grid>

        <Clients/>

        <Grid fluid className="about-section cta-section" id="contact">

          <Row around="xs" className="content-section">
            <Col xs={ 10 }>

              <Row around="xs">
                <h2>Ready to get started?</h2>
              </Row>

              <Row around="xs">

                <Link to="https://goo.gl/forms/FmZnVn7QxyfbXxIK2" target="_blank">
                  <button className="cta">Contact us now</button>
                </Link>

              </Row>
              {/*
              <p className="section-description">For inquiries, contact us at</p>
              <p className="email"><a href="mailto:hello@beetroot.digital">hello@beetroot.digital</a></p>
              */}
            </Col>
          </Row>

        </Grid>


      </div>

    )

  }

}