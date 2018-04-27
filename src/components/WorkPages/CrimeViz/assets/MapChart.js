import * as d3 from 'd3'
import * as topojson from 'topojson'
import Chart from './Chart'

export default class MapChart extends Chart {

  constructor(settings, data, id) {
    super(settings, data, id)

    this.settings = Object.assign({
      stateColor: '#333',
      stateLineColor: '#fff'
    }, this.settings)

    this.topology = settings.topology

  }

  init() {


    this.svg = d3.select(this.settings.selector)
        .style('position', 'relative')
        // .style('background-color', 'transparent')
        // .style('width', '100%')
        // .style('height', '100%')
        // .style('z-index', -1)

    // this.setDimensions()
    this.placeMap()

  }

  setDimensions() {
    let mapRatio = 1.72 // width / height

    let width = this.svg.node().getBoundingClientRect().width,
      height

    this.settings.width = Math.min(width, this.settings.maxWidth)

    height = this.settings.width * 1/mapRatio + this.settings.padding.top + this.settings.padding.bottom

    this.svg.style('height', height)
    this.settings.height = Math.min(height, this.settings.maxHeight)

    d3.select(this.settings.selector)
      .style('height', height)

  }

  drawMap() {
    let width = this.settings.width - this.padding.left - this.padding.right,
      height = this.settings.height - this.padding.top - this.padding.bottom

    // let mapRatio = 1.72

    let fitGeom = topojson.feature(this.topology, this.topology.objects.land)

    this.projection = d3.geoAlbersUsa()
      .fitSize([ width, height ], fitGeom)

    this.path = d3.geoPath().projection(this.projection)

    let defs = this.svg.select('defs')

    defs.select('#states')
      .attr('d', this.path)
      .style('stroke', this.settings.stateLineColor)
      .attr('transform', `translate(${ this.padding.left },${ this.padding.top })`)

    defs.select('#land')
      .attr('d', this.path)
      .style('fill', this.settings.stateColor)
      .attr('transform', `translate(${ this.padding.left },${ this.padding.top })`)

  }

  redraw(data) {
    this.draw(data)
  }

  draw(data) {
    // this.setDimensions()

    this.drawMap()
    // this.drawLegend()
    // this.placeCities(data)
  }

  placeCities() {

  }

  placeMap() {
    let svg = this.svg,
      topology = this.topology

    let defs = svg.append('defs')

    defs.append('path')
        .attr('id', 'land')
      .datum(topojson.feature(topology, topology.objects.land))
        .attr('d', this.path)
        .style('fill', 'transparent')
        .style('stroke', '#fff')

    defs.append('clipPath')
        .attr('id', 'clip')
      .append('use')
        .attr('xlink:href', '#land')

    defs.append('path')
        .attr('id', 'states')
        .datum(topojson.feature(topology, topology.objects.states))
        .attr('d', this.path)
        .style('fill', '#222')
        .style('stroke', '#fff')
        // .style('opacity', 0.35)
        .style('stroke-width', 1)
        // .attr('transform', 'translate(0,0)')

    svg.append('use')
        .attr('xlink:href', '#states')
        .attr('class', 'stroke')

  }

  drawLegend() {
    let squareHeight = 20

    let svg = this.svg

    let legendContainer = svg.selectAll('g.legend-container')
      .data([ this.data ])

    let legendContainerEnter = legendContainer
      .enter().append('g')
        .attr('class', 'legend-container')
        .attr('transform', `translate(${ this.settings.width - this.settings.padding.right },${ 0 })`)

    legendContainer
      .attr('transform', `translate(${ this.settings.width - this.settings.padding.right },${ 0 })`)

    legendContainerEnter.append('text')
      .attr('class', 'legend-title')
      .attr('x', this.settings.padding.right)
      .attr('y', '1em')
      .attr('text-anchor', 'end')
      .text('Fires per 10 sq. mi.')

    let legend = legendContainerEnter.selectAll('g.legend')
      .data(this.colors.domain().slice(1))

    let legendEnter = legend.enter().append('g')
      .attr('class', (d,i) => 'legend legend-' + i)
      .attr('transform', (d,i) => `translate(${ 0 },${ 20 + squareHeight * i })`)

    legendEnter.append('rect')
      .attr('x', this.settings.padding.right - squareHeight)
      .attr('y', 0)
      .attr('height', squareHeight)
      .attr('width', squareHeight)
      .style('fill', (d) => this.colors(d))

    legendEnter.append('text')
      .attr('x', this.settings.padding.right - ( squareHeight + 5 ))
      .attr('y', '1.15em')
      .attr('text-anchor', 'end')
      // .attr('dy', '0.1em')
      .text((d) => '> ' + d / (5.2/10))

  }

}
