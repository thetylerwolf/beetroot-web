import React, { Component, Link } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default class Blockchain extends Component {

  render() {

    return (

      <div>

        <Grid fluid className="cta-section">
          <Row around="xs"  className="content-section">
            <Col xs={10}>

              <Row around="xs">

                <h2>Looking for a Blockchain solution?</h2>

              </Row>


              <Row around="xs">

                <Link href="https://goo.gl/forms/BRK7pWwxDubFdd6r1" target="_blank">
                  <button className="cta">Contact us now</button>
                </Link>

              </Row>

              <Row around="xs">
                <p className="section-description">
                  find out how Beetroot can help
                </p>
              </Row>

            </Col>
          </Row>
        </Grid>

        <Grid fluid className="about-section">

          <Row around="xs"  className="content-section">
            <Col xs={ 10 }>
              <h2 className="section-header">Can Blockchain technology help your business?</h2>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>

              <p className="section-description">
                The current landscape of blockchain technologies can be overwhelming. With over
                1000 blockchains to choose from, where do you even start? Beetroot
                Digital's experience operating in the blockchain space lets us guide you through
                the ins and outs of the technology to help you find a real solution to your
                problem.
              </p>
              <br/>
              <p className="section-description">
                Blockchain technology has the potential to help businesses optimize their operations
                beyond the capabilities of yesterday's technologies. Beetroot will help you identify the
                use cases that will help your business most and work out the right solution. We'll even
                implement it for you!
              </p>

            </Col>
          </Row>

        </Grid>

        <Grid fluid className="cta-section">
          <Row around="xs"  className="content-section">
            <Col xs={10}>

              <Row around="xs">

                <Link href="https://goo.gl/forms/BRK7pWwxDubFdd6r1" target="_blank">
                  <button className="cta">Contact us now</button>
                </Link>

              </Row>

              <Row around="xs">
                <p className="section-description">
                  find out how Blockchain can work for your business
                </p>
              </Row>

            </Col>
          </Row>
        </Grid>

        <Grid fluid className="about-section">

          <Row around="xs"  className="content-section">
            <Col xs={ 10 }>
              <h2 className="section-header">Ready to build?</h2>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 10 }>

              <p className="section-description">
                Blockchain programming isn't easy. We know. Our team started building dApps
                before the term dApp existed! Need help building your application? That's
                what we do.
              </p>
              <br/>

            </Col>
          </Row>

        </Grid>

        <Grid fluid className="cta-section">
          <Row around="xs"  className="content-section">
            <Col xs={10}>

              <Row around="xs">

                <Link href="https://goo.gl/forms/BRK7pWwxDubFdd6r1" target="_blank">
                  <button className="cta">Contact us now</button>
                </Link>

              </Row>

              <Row around="xs">
                <p className="section-description">
                  Find out how to get started today
                </p>
              </Row>

            </Col>
          </Row>
        </Grid>


      </div>

    )

  }

}