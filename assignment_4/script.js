// Some inspiration taken from https://bl.ocks.org/dimitardanailov/6f0a451d4457b9fa7bf6e0dddcd0f468
function drawSmallHands(){
  d3.text('hands.csv', function(text) {
      var data = d3.csvParseRows(text);

      var drawHandLine = d3.line()
        .x(function(d) { return d.x1*55; })
        .y(function(d) { return d.y1*55; })
        .curve(d3.curveBasis);

      data.forEach(function(d, i){
        hand = getHandCoordinates(d)

        d3.select("#plotarea").append('div')
          .attr('class', 'small_hand_div')
          .attr('data-id', i)
          .append('svg')
          .attr('class', 'small_hand')
          .selectAll("path")
          .data(hand)
          .enter()
          .append("path")
          .attr("fill", 'beige')
          .attr("d", drawHandLine(hand))
          .attr("stroke", "black")
          .attr("stroke-width", 0.1)
          .attr('transform', "scale(1.05)")
      });
  });
}

function drawBigHand(index){
  d3.text('hands.csv', function(text) {

      var data = d3.csvParseRows(text);

      var drawHandLine = d3.line()
        .x(function(d) { return d.x1*350; })
        .y(function(d) { return d.y1*350; })
        .curve(d3.curveBasis);

        hand = getHandCoordinates(data[index])

        d3.select("#big_hand").remove();
        d3.select("#plotarea2").append('svg')
          .attr('id', 'big_hand')
          .selectAll("path")
          .data(hand)
          .enter()
          .append("path")
          .attr("fill", 'beige')
          .attr("d", drawHandLine(hand))
          .attr("stroke", "black")
          .attr("stroke-width", 0.1)
          .attr('transform', "scale(1.05)")
  });
}

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "x: <span style='color:red'>" + d.x + "</span><br>y: <span style='color:red'>" + d.y + "</span>";
  })

function scatterPlot(){
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 760 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

    // parse the date / time

    // set the ranges
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the line

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#scatter").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
    svg.call(tip);
    // Get the data
    d3.csv("hands_pca.csv", function(error, data) {
      if (error) throw error;

      // format the data
      data.forEach(function(d) {
          d.x = +d.x;
          d.y = +d.y;
      });

      // Scale the range of the data
      x.domain([d3.min(data, function(d){ return +d.x;})-0.1, d3.max(data, function(d) {return +d.x;})]);
      y.domain([d3.min(data, function(d){ return +d.y;})-0.1, d3.max(data, function(d) {return +d.y;})]);

      //x.domain(d3.extent(data, function(d) { return d.x; }));
      //y.domain([0, d3.max(data, function(d) { return d.y; })]);

      // Add the valueline path.
      svg.append("path")
          .data([data])
          .attr("class", "line")

      // Add the scatterplot
      svg.selectAll("dot")

          .data(data)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr('class', 'plot_circle')
          .attr('data-id', 'something')
          .attr("cx", function(d) { return x(d.x); })
          .attr("cy", function(d) { return y(d.y); })
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide)
          .style("fill", 'black')
          .each(function (d, i) {
            d3.select(this).attr('data-id', i);
          });

      // Add the X Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      // Add the Y Axis
      svg.append("g")
          .call(d3.axisLeft(y));

    });
}

function getHandCoordinates(data){
  coords = []
  for (var i = 0; i < 56; i++){
    coords[i] = {'x1': data[i], 'y1': data[i+56], 'x2': data[i+1], 'y2': data[i+57]};
  }
  return coords;
}


$(document).on('click', '.small_hand_div', function () {
  dataid = $(this).attr('data-id');
  $('.plot_circle').css('fill','black');
  $('.plot_circle').attr('r','5');
  $('.plot_circle[data-id=' + dataid + ']').css('fill','red');
  $('.plot_circle[data-id=' + dataid + ']').attr('r','10');
  drawBigHand($(this).attr('data-id'));
});

$(document).on('click', '.plot_circle', function () {
  drawBigHand($(this).attr('data-id'));
});

d3.select(window).on('load', function(){
  drawSmallHands();
  drawBigHand(0);
  scatterPlot();
});
