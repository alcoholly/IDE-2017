d3.select(window).on('load', init);

function init() {

  var margin = {top: 0, right: 0, bottom: 0, left: 25},
      width = parseFloat(d3.select('body').style('width')) - 20;
      height = 500;


  var y = d3.scaleLinear().range([height, 0]);
  var x = d3.scaleBand().range([0, width]);

  var xAxis = d3.axisBottom(x);
  var yAxis = d3.axisLeft(y);

  var svg = d3.select("#barchart")
      .append("g")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.csv("decade_means.csv", function(data) {

    data.forEach(function(d){
      d.decade = d.decade + '-' + d.decade.replace(/0$/,"9");
      d.mean = +d.mean;
    });

    x.domain(data.map(function(d) { return d.decade; }))
      .paddingInner(0.1)
      .paddingOuter(0.2);
    y.domain([0, d3.max(data, function(d) { return d.mean; }) + 0.5]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .call(yAxis)

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("data-mean", function(d) { return d.mean; })
        .attr("x", function(d) { return x(d.decade); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.mean); })
        .attr("height", function(d) { return height - y(d.mean); });
  });



}
