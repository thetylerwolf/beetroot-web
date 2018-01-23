import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ReactGA from 'react-ga'

import Home from './components/Home'
import About from './components/About'
// import ViewPortfolioPiece from './components/ViewPortfolioPiece'

ReactGA.initialize('UA-112854595-1')

export default class App extends Component {

  render() {

    return (

      <Router onUpdate={ logPageView }>
        <ScrollToTop>
          <main>
            <Route exact path="/" component={ Home }/>
            {/* <Route path="/about" component={ About }/> */}
            {/* <Route path="/works/:id" component={ ViewPortfolioPiece }/> */}
          </main>
        </ScrollToTop>
      </Router>

    )

  }

}

function logPageView() {
    var path = /\/.*(?=\?)/.exec(window.location.hash)[0]
    ReactGA.set({ page: path });
    ReactGA.pageview(path);
}
