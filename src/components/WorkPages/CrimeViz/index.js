import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import MapChart from './assets/MapChart'
import Radiator from './assets/Radiator'

import './assets/index.css'
import * as data from './assets/top_cities.json'
import * as topology from './assets/usjson.json'

export default class CrimeViz extends Component {

  constructor(props) {
    super(props)

    this.dataKey = 'total'

    this.processCityData( this.dataKey )
  }

  componentDidMount() {

    let map = new MapChart({
      selector: '#chart',
      width: 960,
      height: 500,
      topology: topology,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      stateLineColor: '#888'
    }, undefined, 'chart')

    map.init()
    map.draw()

    this.radiators = this.states.map((d,i) => {
      if(i > 50) return undefined

      let position = map.projection([ d.long, d.lat ])

      let rData = {
        current: d['2017'][ this.dataKey ],
        previous: d['2016'][ this.dataKey ],
        position: {
          x: position[0],
          y: position[1]
        }
      }

      let chart2 = new Radiator({
        height:24,
        width: 24,
        padding: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        },
        strokeWidth: 3,
        previousColor: '#fff',
        currentColor: '#DA5061',
        maxRadius: 12,
        identifier: `${ d.state }-${ d.city}`
      }, rData, 'chart')

      chart2.draw()

      return chart2

    })
  }

  processCityData( key ) {

    let states = {}

    data.forEach((d) => {

      let state = d.state

      d.rate = d['2017'][ key ] / d.population
      // console.log(d.city, d.state, d.rate)

      let max = (states[state] && states[state].rate) || 0

      if(d.rate > max) {
        states[ state ] = d
        states[ state ].rate = d.rate
      }

    })

    this.states = Object.keys( states ).map((key) => states[key])
  }

  render() {

    return (

      <div className="view-work-page">

        <div className="work-header">

          <div className="work-title-wrap">

            <div className="work-title">FBI Crime data === WIP === Tyler Wolf</div>

          </div>

        </div>

        <div className="work-body">

          <div className="description-wrap">
            <Grid>

              <Row>

                <h3>FBI Crime data === WIP === Tyler Wolf</h3>
                <Col className="chart-container" xs={ 12 }>
                  <svg id="chart" width="900" height="500" style={{ backgroundColor: '#17253C' }}/>
                </Col>

              </Row>

            </Grid>
          </div>

        </div>

      </div>

    )

  }

}
