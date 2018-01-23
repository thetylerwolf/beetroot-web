import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'

import portfolio from '../assets/js/portfolio.js'

export default class PreviousWork extends Component {

  render() {

    let contents = []

    // 3 pieces per row
    let numRows = Math.ceil( (portfolio.entries.length - 1)/3 )

    for (let i = 0; i < numRows; i++) {

      let entries = [ i*3, i*3 + 1, i*3 + 2 ]
      let row = []
      entries.forEach((idx) => {

        let entry = portfolio.entries[idx]

        let inner = (
          <span key={ `piece-${ i }-${ idx }` }>

            <div className="piece-image">
              <img
                className={ `${ entry.id} ${(entry.fit ? 'fit' : null) }` }
                src={ `/portfolio/${entry.id}/${entry.cover.img}` }
                alt={ entry.title }
              />
            </div>

            <div
              className="piece-title"
              style={{
                color: entry.lightText ? '#fff' : '#1a1a1a'
              }}
            >
              { entry.title }
            </div>

          </span>
        )

        let linkURL = entry.external ? entry.link : '/portfolio/' + entry.id
        let link

        if( entry.external ) {
          link = <a href={ linkURL } target="_blank">{ inner }</a>
        } else {
          link = <Link to={ linkURL }>{ inner }</Link>
        }

        row.push((
          <Col className="piece-wrap" key={ `col-${ i }-${ idx }` } xs={ 10 } md={ 3 }>
            { link }
          </Col>
        ))

      })

      contents.push( row )
    }

    return (

        <div className="portfolio-section">
          <Grid fluid>

            <Row around="xs">
              <Col xs={ 10 }>
                <h4 className='section-header'>
                  Recent Work
                </h4>
              </Col>
            </Row>

            { contents.map(( cols, i ) => {
              return (
                <Row className="piece-row" key={ `row-${ i }`} center="xs">
                  { cols }
                </Row>
              )
            }) }

          </Grid>

        </div>

    )

  }

}
