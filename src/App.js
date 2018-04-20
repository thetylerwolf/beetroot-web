import React, { Component } from 'react'
import {
  Router,
  Route,
} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import createHistory from 'history/createBrowserHistory'


import Home from './components/Home'
import BlockchainHome from './components/BlockchainHome'
import Work from './components/Work'
// import About from './components/About'
// import ViewPortfolioPiece from './components/ViewPortfolioPiece'

const history = createHistory()
history.listen((location, action) => {
  window.gtag('config', 'UA-112854595-1', {
    'page_title' : location.hash || location.pathname,
    'page_path': location.pathname + location.hash
  });
  console.log(location.pathname + location.hash)
})


export default class App extends Component {

  render() {

    return (

      <Router history={ history }>
        <ScrollToTop>
          <main>

            <Route exact path="/" component={ Home }/>
            <Route exact path="/blockchain" component={ BlockchainHome }/>
            <Route exact path="/work/:id" component={ Work }/>
            {/* <Route path="/about" component={ About }/> */}
            {/* <Route path="/works/:id" component={ ViewPortfolioPiece }/> */}

          </main>
        </ScrollToTop>
      </Router>

    )

  }

}
