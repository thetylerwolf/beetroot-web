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
      strokeWidth: 1,
      previousColor: '#fff',
      currentColor: '#DA5061'
    }, this.settings )

     // this.dispatch = d3.dispatch('hover', 'leave', 'click')

    return this
  }

  draw() {

    let settings = this.settings
      // dispatch = this.dispatch

    // let label = d3.arc()
    //   .outerRadius(radius + this.settings.labelRadius)
    //   .innerRadius(radius + this.settings.labelRadius)

    let container = d3.select( '#' + this.id)
      .selectAll('g.chart-container').data([ this.data ])
      .enter().append('g')
        .attr('class', 'chart-container')
        .attr('id', (d,i) => 'chart-' + Math.floor(Math.random() * 1000))
        .attr('transform', (d,i) => `translate(${ 0 },${ i * (settings.height + 50) })`)
      // .attr('transform', `translate( ${ this.padding.left }, ${ this.padding.top } )`)

    let g = container.append('g')
      .attr('class', 'crime-chart')
      .attr('transform', `translate( ${ this.padding.left }, ${ this.padding.top + settings.maxRadius })`)


    let previousY = this.innerHeight - this.data.previous * settings.maxRadius,
      currentY = this.innerHeight - this.data.current * settings.maxRadius

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

    if(!decrease) circleData.reverse()

    let circleWrapEnter = g.selectAll('.circle')
      .data( circleData )
      .enter().append('g')
        .attr('class', (d) => 'circle ' + d.key)

    let circleWrap = circleWrapEnter.merge(circleWrapEnter)

    let circle = circleWrapEnter.append('circle')
        .attr('class', (d) => d.key)
        .attr('r', (d) => d.value * settings.maxRadius )
        .style('fill', (d) => {
          if(d.key == 'current') {
            return settings.currentColor
          } else if (d.key == 'previous') {
            return settings.previousColor
          }
        })
        .style('stroke', settings.currentColor)
        .attr('cx', settings.padding.left + settings.maxRadius )
        .attr('cy', (d) => d.y)

    let radiate = () => {

      let t = d3.transition()
        .delay(500)
        .duration(5000)
        .ease(d3.easeLinear)

      g
        .append('circle')
          .attr('r', this.data.previous * settings.maxRadius)
          .attr('cx', settings.padding.left + settings.maxRadius )
          .attr('cy', previousY)
          .style('fill', 'transparent')
          .style('stroke', decrease ? settings.currentColor : settings.previousColor)
          .style('stroke-width', settings.strokeWidth)
          .style('opacity', 0.7)
        .transition(t)
          .on('start', () => setTimeout(() => radiate(), 2000))
          .attr('r', this.data.current * settings.maxRadius)
          .attr('cy', currentY)
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
