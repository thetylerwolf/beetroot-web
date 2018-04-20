import React, { Component } from 'react'
// import ScrollWatcher from '../assets/js/ScrollWatcher'

import HeaderNav from './HeaderNav'
import Blockchain from './Blockchain'

import SparkleBall from '../assets/js/SparkleBall'

// let scrollWatcher = new ScrollWatcher()

export default class BlockchainHome extends Component {
  constructor() {
    super()

    this.state = {
      showBrand: false,
      showDigital: false,
    }

    this.sb = new SparkleBall()
  }


  componentDidMount() {
    this.sb.init( 'content-canvas-wrap', false )

    // scrollWatcher.init()
    //   .onScrollStart((e) => this.onScrollStart(e))
    //   .onScrollEnd((e) => this.onScrollEnd(e))

  }

  componentWillUnmount() {
    // scrollWatcher.remove()
    this.sb.remove()
  }

  render() {

    return (

      <div className="content" id="content">

        <HeaderNav
          showBrand={ true }
          location={ this.props.location }
        />

        <div className="intro-section">

          <div id="content-canvas-wrap" />

        </div>

        <div id="about" className="content-about-wrap">

          <Blockchain></Blockchain>

        </div>

        <footer id="footer" className="content-footer">
          <div>Copyright 2018 Beetroot</div>
        </footer>

      </div>

    )

  }

}