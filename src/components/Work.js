import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import FontAwesome from 'react-fontawesome'

import HeaderNav from './HeaderNav'
import workPages from './WorkPages'

export default class Work extends Component {
  constructor(props) {
    super(props)

    this.state = workPages[ props.match.params.id ]
  }

  componentWillReceiveProps(nextProps) {
    this.setState( workPages[ nextProps.match.params.id ]  )
  }

  render() {
    return (

      <div className="work-page-wrapper">

        <HeaderNav
          showBrand={ true }
        />

        { this.state.page }

      </div>

    )

  }

}

