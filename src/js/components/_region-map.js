var d3 = require('d3');
var topojson = require('topojson');
//var regionData = require('../data/_region-map');


function englandRegions() {

  var svg = d3.select("svg");
  var path = d3.geoPath();

  d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
    if (error) throw error;

    var regions = svg.append("g")
      .attr("class", "regions")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .enter()
      .append("path")
      .attr("class", "regions__item")
      .attr("d", path);

    svg.call(d3.zoom().scaleExtent([1,5]).on("zoom", function() {
  		regions.attr("transform", d3.event.transform);
  	}));
  });
}


module.exports = {
  regions: englandRegions
};
