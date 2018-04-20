import Chart from './Chart'
import * as d3 from 'd3'

export default class RadiatorChart extends Chart {

  constructor(settings, data, id) {
    super(settings, data, id)

    this.settings = Object.assign( {
      maxRadius: 100,
      minRadius: 0,
      showLabels: true,
      labelRadius: 20,
      strokeWidth: 5,
      previousColor: '#fff',
      currentColor: '#DA5061',
      circleDelay: 0,
      circleDuration: 3000,
      position: {
        x: undefined,
        y: undefined,
      },
      identifier: 'radiator'
    }, this.settings )

     // this.dispatch = d3.dispatch('hover', 'leave', 'click')

    return this
  }

  draw() {

    let settings = this.settings
      // dispatch = this.dispatch

    let container = d3.select( '#' + this.id)
      .selectAll(`g.chart-container.${ settings.identifier }`).data([ this.data ])
      .enter().append('g')
      // .append('g')
        // .data( this.data )
        .attr('class', `chart-container ${ settings.identifier }`)
        .attr('id', (d,i) => 'chart-' + Math.floor(Math.random() * 1000))
        .attr('transform', (d,i) => `translate(${ (d.position.x || 0) },${ (d.position.y || 0) - 2 * settings.maxRadius })`)
      // .attr('transform', `translate( ${ this.padding.left }, ${ this.padding.top } )`)

    let g = container.append('g')
      .attr('class', 'crime-chart')
      // .attr('transform', `translate( ${ 0 }, ${ 0 })`)

    let previousY =  Math.min(settings.maxRadius, this.data.previous * settings.maxRadius),
      currentY = Math.min(settings.maxRadius, this.data.current * settings.maxRadius)

    let circleData = [{
      key: 'previous',
      value: this.data.previous,
      y: previousY
    },{
      key: 'current',
      value: this.data.current,
      y: currentY
    }]
    let decrease = circleData[0].value > circleData[1].value

    let radiate = () => {

      let t = d3.transition()
        .delay( settings.circleDelay )
        .duration( settings.circleDuration )
        .ease(d3.easeLinear)

      g
        .append('circle')
          .attr('r', () => {
            if(decrease) {
              return Math.min( settings.maxRadius, this.data.previous * settings.maxRadius)
            } else {
              return 0
            }
          })
          .attr('cx', 0 )
          .attr('cy', () => {
            if(decrease) return previousY
            else return 2 * settings.maxRadius
          })
          .style('fill', 'transparent')
          .style('stroke', decrease ? settings.previousColor : settings.currentColor)
          .style('stroke-width', 1)
          .style('opacity', decrease ? 0 : 0.7)
        .transition(t)
          .on('start', () => setTimeout(() => radiate(), 1000))
          .attr('r', () => {
            if(decrease) {
              return 0
            } else {
              return Math.min( settings.maxRadius, this.data.current * settings.maxRadius)
            }
          })
          .style('stroke-width', settings.strokeWidth)
          .attr('cy', currentY)
          .style('opacity', decrease ? 0.7 : 0.1)
        .transition()
          .style('opacity', 0)
          .style('stroke-width', 0)
          .remove()
    }


    radiate()

    this.placeTitle( container )

    // this.placeLabels( circle, label )

  }

  placeLabels(arc, label) {

    if( this.settings.showLabels ) {

      arc.append('text')
        .attr('class', 'label')
        .attr('transform', (d) => `translate( ${ label.centroid( d ) })`)
        .attr('dy', '0.35em')
        .attr('x', -15)
        .text((d) => d.data.key)

    }

  }

}
