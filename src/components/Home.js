import React, { Component } from 'react'
import ScrollWatcher from '../assets/js/ScrollWatcher'
import Typed from 'typed.js'

import HeaderNav from './HeaderNav'
import PortfolioPiece from './PortfolioPiece'

import SparkleBall from '../assets/js/SparkleBall'
import '../assets/css/Home.css'
import portfolio from '../assets/js/portfolio.js'

let scrollWatcher = new ScrollWatcher()

let portfolioPieces = portfolio.entries.map(( entry, i ) => {
  return (
    <div className="piece-row" key={ i }>
      <PortfolioPiece entry={ entry } />
    </div>
  )
})

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      showBrand: false
    }

    this.sb = new SparkleBall()
  }


  componentDidMount() {
    this.sb.init( 'home-canvas-wrap' )

    scrollWatcher.init()
      .onScrollStart((e) => this.onScrollStart(e))
      .onScrollEnd((e) => this.onScrollEnd(e))

    let options = {
      typeSpeed: 250,
      showCursor: false,
    }

    let typed = new Typed(this.refs.name1, {
        ...options,
        startDelay: 3000,
        strings: [ 'Root' ],
        onComplete: ( self ) => {
          new Typed( this.refs.name2, {
            ...options,
            strings: [ 'Studio' ]
          })
        }
    })

  }

  onScrollStart(e) {
  }

  onScrollEnd(e) {
    if(window.scrollY > window.innerHeight) {

      this.sb.stopAnimation()

    } else {

      this.sb.startAnimation()

    }

  }

  componentWillUnmount() {
    scrollWatcher.remove()
    this.sb.remove()
  }

  componentDidUpdate() {

  }

  render() {

    return (

      <div className="home">

        <HeaderNav
          onShow={ () => this.sb.stopAnimation() }
          onHide={ () => {
            if(window.scrollY < window.innerHeight)
              this.sb.startAnimation()
          }}
          showBrand={ this.state.showBrand }
          location={ this.props.location }
        />

        <div className="intro-section">

          <div id="home-canvas-wrap" />

          <div className="intro-copy-wrap">

            <div className="name-wrap">
              <span className="name" ref="name1"></span>
              <br/>
              <span className="name" ref="name2"></span>
            </div>

          </div>
          {/* <canvas id="home-canvas"></canvas> */}

        </div>

        <div className="home-portfolio-wrap">

          { portfolioPieces }

        </div>

      </div>

    )

  }

}