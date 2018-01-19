import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import '../assets/css/About.css'

export default class About extends Component {

  render() {

    return (

      <div className="about-section">

        <Grid fluid>

          <Row around="xs"  className="content-section">
            <Col xs={ 10 }>
              <h4 className="section-header">About</h4>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <h3 className="headline">We help businesses grow by expanding and improving their digital&nbsp;experience.</h3>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <p className="section-description">
                Success in todays digital world requires businesses to focus on the user
                and address their needs. Root Studio designs and builds the great experiences
                that attract and retain users, making your business indispensible in their eyes.
                We do this by leveraging our experience building powerful software,
                designing impactful experiences and establishing effective operational processes.
                The end result is a product that resonates with your core business.
              </p>
            </Col>
          </Row>

          <Row around="xs" className="content-section">
            <Col xs={ 10 }>
              <h4 className="section-header">Services</h4>
            </Col>
          </Row>

          <Row center="xs">

            <Col xs={ 10 } md={ 3 }>

              <h3 className="services-title">Strategy</h3>

              <ul className="services-list">
                <li>Product Roadmapping</li>
                <li>Technology Roadmapping</li>
                <li>User Research</li>
                <li>Market Research</li>
              </ul>

            </Col>

            <Col xs={ 10 } md={ 3 }>

              <h3 className="services-title">Design</h3>

              <ul className="services-list">
                <li>User Experience</li>
                <li>Responsive Homepages</li>
                <li>Mobile</li>
                <li>Wearables</li>
              </ul>

            </Col>

            <Col xs={ 10 } md={ 3 }>

              <h3 className="services-title">Technology</h3>

              <ul className="services-list">
                <li>Product Development</li>
                <li>Creative Code</li>
                <li>Mobile Apps</li>
                <li>AR/VR</li>
              </ul>

            </Col>

          </Row>

          <Row around="xs" className="content-section">
            <Col xs={ 10 }>
              <h4 className="section-header">Contact</h4>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <p className="email"><a href="mailto:hello@rootstudio.co">hello@rootstudio.co</a></p>
            </Col>
          </Row>

        </Grid>


      </div>

    )

  }

}