import * as d3 from 'd3'

export default class Chart {

  constructor(settings, data, id) {

    this.padding = Object.assign({
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }, settings.padding)


    this.settings = Object.assign({
      width: 900,
      height: 500,
      colors: d3.schemeCategory10,
      showAxes: true,
      showTickValues: true,
      showTickLines: true,
      showAxisLines: true,
      xAxisPadding: 0,
      yAxisPadding: 0,
    }, settings)

    if(this.settings.colors && this.settings.colors.length) {
      this.setColors(this.settings.colors)
    }

    this.innerHeight = this.settings.height - this.padding.top - this.padding.bottom
    this.innerWidth = this.settings.width - this.padding.left - this.padding.right

    this.data = data
    this.id = id

  }

  drawXAxis(container) {

    if(!this.settings.showAxes) return

    container.append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', `translate(${ this.padding.left }, ${ this.padding.top + this.settings.xAxisPadding + this.innerHeight })`)
      .call( d3.axisBottom(this.xScale) )

    container.select('.x-axis')
      .selectAll('.tick').selectAll('text')
      .each(function(d) {
        // Needed because text-anchor does not translate to Sketch
        // Sketch always left-aligns SVG text
        let dims = this.getBBox()

        d3.select(this)
          .style('text-anchor', 'start')
          .attr('x', -dims.width/2)
          .attr('y', dims.y + 7)

      })

    if(!this.settings.showTickValues) {

      container.select('.x-axis')
        .selectAll('.tick').selectAll('text')
        .each(function() {
          d3.select(this).remove()
        })

    }

    if(!this.settings.showTickLines) {

      container.select('.x-axis')
        .selectAll('.tick').selectAll('line')
        .each(function() {
          d3.select(this).remove()
        })

    }

    if(!this.settings.showAxisLines) {

      container.select('.x-axis')
        .selectAll('path')
        .each(function() {
          d3.select(this).remove()
        })

    }

  }

  drawYAxis(container) {

    if(!this.settings.showAxes) return

    container.append('g')
      .attr('class', 'axis y-axis')
      .attr('transform', `translate(${ this.padding.left - this.settings.yAxisPadding }, ${ this.padding.top })`)
      .call( d3.axisLeft(this.yScale) )

    container.select('.y-axis')
      .selectAll('.tick').selectAll('text')
      .each(function(d) {
        // Needed because text-anchor does not translate to Sketch
        // Sketch always left-aligns SVG text
        let dims = this.getBBox()

        d3.select(this)
          .style('text-anchor', 'start')
          .attr('x', -9 - dims.width)
          .attr('y', dims.y + 3)

      })

    if(!this.settings.showTickValues) {

      container.select('.y-axis')
        .selectAll('.tick').selectAll('text')
        .each(function() {
          d3.select(this).remove()
        })

    }

    if(!this.settings.showTickLines) {

      container.select('.y-axis')
        .selectAll('.tick').selectAll('line')
        .each(function() {
          d3.select(this).remove()
        })

    }

    if(!this.settings.showAxisLines) {

      container.select('.y-axis')
        .selectAll('path')
        .each(function() {
          d3.select(this).remove()
        })

    }

  }

  placeTitle(container) {

    if(!this.settings.showChartTitle) return

    let titleContainer = container.append('g')
      .attr('class', 'title-container')
      .attr('transform', `translate(${ this.padding.left },${ 10 })`)

    titleContainer.append('text')
      .text( this.settings.chartTitle )

  }

  setColors(colors) {
    this.settings.colors = d3.scaleOrdinal().range( this.settings.colors )
  }

  remove() {
    d3.select('#' + this.id).selectAll('*').remove()
  }

}