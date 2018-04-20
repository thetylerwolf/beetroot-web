import React, { Component } from 'react'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import createHistory from 'history/createBrowserHistory'


import Home from './components/Home'
import BlockchainHome from './components/BlockchainHome'
// import About from './components/About'
// import ViewPortfolioPiece from './components/ViewPortfolioPiece'

const history = createHistory()
history.listen((location, action) => {
  window.gtag('config', 'UA-112854595-1', {
    'page_title' : location.hash,
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
            <Switch location={ this.props.location }>
              <Route exact path="/" component={ Home }/>
              <Route exact path="/home" component={ Home }/>
              <Route path="/blockchain" component={ BlockchainHome }/>
              {/* <Route path="/about" component={ About }/> */}
              {/* <Route path="/works/:id" component={ ViewPortfolioPiece }/> */}
            </Switch>
          </main>
        </ScrollToTop>
      </Router>

    )

  }

}
