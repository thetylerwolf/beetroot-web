import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import ViewPortfolioPiece from './components/ViewPortfolioPiece'

export default class App extends Component {

  render() {

    return (

      <Router>
        <main>
          <Route exact path="/" component={ Home }/>
          <Route path="/about" component={ About }/>
          <Route path="/portfolio" component={ ViewPortfolioPiece }/>
        </main>
      </Router>

    )

  }

}
