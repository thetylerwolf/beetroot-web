import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'

function hashLinkScroll() {
  setTimeout(() => {
    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start'
        });
      }, 0);
    }
  })
}

export default class HeaderNav extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      showMenu: false
    }

  }

  componentDidUpdate( oldProps, oldState ) {
    if(this.state.showMenu) {
      if(this.props.onShow) this.props.onShow()
    } else {
      if(this.props.onHide) this.props.onHide()
    }
  }

  toggleMenu() {
    let showMenu = !this.state.showMenu

    if(showMenu) {
      document.body.className = 'noscroll'
    } else {
      document.body.className = ''
    }

    this.setState({ showMenu })
  }

  render() {

    return (
      <div className={ `header-wrap ${ this.state.showMenu ? 'active' : '' } ${ this.props.light ? 'light' : '' }` }>

        <div className="full-menu" >
          <Link className="menu-link home" to="#home" onClick={ (e) => { this.toggleMenu(e); hashLinkScroll() } }><span>Home</span></Link>
          <Link className="menu-link about" to="#about" onClick={ (e) => { this.toggleMenu(e); hashLinkScroll() } }><span>About</span></Link>
          <Link className="menu-link contact" to="#contact" onClick={ (e) => { this.toggleMenu(e); hashLinkScroll() } }><span>Contact</span></Link>
        </div>

        <header className="header-nav">

          <span className={ `brand ${ !this.props.showBrand ? 'hidden' : '' }` }><Link to="/" className={ this.props.light ? '' : 'white' }>
            <div>Beetroot</div>
          </Link></span>

          <div className="toggle">
              <span className="menu-text" onClick={ () => this.toggleMenu() }>{ this.state.showMenu ? 'CLOSE' : 'MENU' }</span>
          </div>

        </header>

      </div>

    )

  }

}