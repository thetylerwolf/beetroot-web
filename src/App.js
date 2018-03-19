import React, { Component } from 'react'
import {
  Router,
  Route
} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ReactGA from 'react-ga'
import createHistory from 'history/createBrowserHistory'


import Home from './components/Home'
// import About from './components/About'
// import ViewPortfolioPiece from './components/ViewPortfolioPiece'

ReactGA.initialize('UA-112854595-1')
ReactGA.pageview(window.location.pathname)

const history = createHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
  console.log(location.pathname)
})


export default class App extends Component {

  render() {

    return (

      <Router history={ history }>
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
