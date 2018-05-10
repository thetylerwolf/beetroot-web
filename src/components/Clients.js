import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default class Clients extends Component {

  render() {

    return (

      <div>

        <Grid fluid className="clients-section">

          <Row around="xs"  className="content-section">
            <Col xs={ 10 }>
              <h4 className="section-header">Who we've worked with</h4>
            </Col>
          </Row>

          <Row around="xs">
            <Col xs={ 12 } md={ 5 } lg={ 2 } className="previous-client etrade"></Col>
            <Col xs={ 12 } md={ 5 } lg={ 2 } className="previous-client novus"></Col>
            <Col xs={ 12 } md={ 5 } lg={ 2 } className="previous-client solidx"></Col>
            <Col xs={ 12 } md={ 5 } lg={ 2 } className="previous-client sungenomics"></Col>
          </Row>

        </Grid>


      </div>

    )

  }

}