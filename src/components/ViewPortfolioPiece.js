import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import HeaderNav from './HeaderNav'
import portfolioPages from './PortfolioPages'

export default class ViewPortfolioPiece extends Component {
  constructor(props) {
    super(props)

    this.state = portfolioPages[ props.match.params.id ]
  }

  componentWillReceiveProps(nextProps) {
    this.setState( portfolioPages[ nextProps.match.params.id ]  )
  }

  render() {
    return (

      <div className="view-portfolio-piece-wrapper">

        <HeaderNav
          showBrand={ true }
        />

        <div className="side-link previous-link-wrap">
          <Link to={ '/portfolio/' + this.state.previous } className="previous-link">
            <FontAwesome name="long-arrow-left" />
            <div className="link-text">{ portfolioPages[ this.state.previous ].name }</div>
          </Link>
        </div>

        { this.state.page }

        <div className="side-link next-link-wrap">
          <Link to={ '/portfolio/' + this.state.next } className="next-link">
            <FontAwesome name="long-arrow-right" />
            <div className="link-text">{ portfolioPages[ this.state.next ].name }</div>
          </Link>
        </div>

      </div>

    )

  }

}

