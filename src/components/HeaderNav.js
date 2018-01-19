import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import SparkleBall from '../assets/js/SparkleBall'
import '../assets/css/HeaderNav.css'

export default class HeaderNav extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      showMenu: false
    }

    this.sparkleball = new SparkleBall('a')
  }

  componentDidUpdate( oldProps, oldState ) {
    if(this.state.showMenu) {
      if(this.props.onShow) this.props.onShow()
      this.sparkleball.startAnimation()
    } else {
      if(this.props.onHide) this.props.onHide()
      this.sparkleball.stopAnimation()
    }
  }

  componentDidMount( newProps, newState ) {
    this.sparkleball.init( 'header-canvas-wrap', 'full-menu' )
    this.sparkleball.stopAnimation()
  }

  componentWillUnmount() {
    this.sparkleball.remove()
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu })
  }

  checkSameRoute(e) {
    if(e.target.parentNode.href === window.location.href) {
      this.toggleMenu()
    }
  }

  render() {

    return (
      <div className="header-wrap">

        <div className={ `full-menu ${ this.state.showMenu ? 'active' : '' }` } >
          <div id="header-canvas-wrap"></div>
          <Link className="menu-link home" to="/" onClick={ (e) => this.checkSameRoute(e) }><span>Home</span></Link>
          <Link className="menu-link about" to="/about" onClick={ (e) => this.checkSameRoute(e) }><span>About</span></Link>
          <Link className="menu-link contact" to="/contact" onClick={ (e) => this.checkSameRoute(e) }><span>Contact</span></Link>
        </div>

        <header className="header-nav">

          {
            this.props.showBrand ? <div className="brand"><Link to="/">Root Studio</Link></div> : undefined
          }
          <div className="toggle">
              <span className="menu-text" onClick={ () => this.toggleMenu() }>{ this.state.showMenu ? 'CLOSE' : 'MENU' }</span>
          </div>

        </header>

      </div>

    )

  }

}