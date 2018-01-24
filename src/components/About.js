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
              <h3 className="headline">We help businesses grow by expanding and improving their digital&nbsp;experience.</h3>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>
              <p className="section-description">
                Success in todays digital world requires businesses to focus on the user
                and address their needs. Beetroot designs and builds the great experiences
                that attract and retain users, making your business indispensible in their eyes.
                We do this by leveraging our experience building powerful software,
                designing impactful experiences and establishing effective operational processes.
                The end result is a product that resonates with your core business.
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
                    <li>Product Development</li>
                    <li>Creative Code</li>
                    <li>Mobile Apps</li>
                    <li>AR/VR</li>
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
              <p className="email"><a href="mailto:hello@beet-root.co">hello@beet-root.co</a></p>
            </Col>
          </Row>

        </Grid>


      </div>

    )

  }

}