

d3.select(window).on('load', init);


function init() {
function getHandCoordinates(data){
  coords = []
  for (var i = 0; i < 56; i++){
    coords[i] = {'x1': data[i], 'y1': data[i+56], 'x2': data[i+1], 'y2': data[i+57]};
  }
  return coords;
}



function draw(data){}


// Some inspiration taken from https://bl.ocks.org/dimitardanailov/6f0a451d4457b9fa7bf6e0dddcd0f468

function drawSmallHands(){
  d3.text('hands.csv', function(text) {
      var data = d3.csvParseRows(text);

      var drawHandLine = d3.line()
        .x(function(d) { return d.x1*55; })
        .y(function(d) { return d.y1*55; })

      data.forEach(function(d){
        hand = getHandCoordinates(d)

        d3.select("#plotarea").append('div').append('svg')
          .attr('class', 'lilbox')
          .selectAll("path")
          .data(hand)
          .enter()
          .append("path")
          .attr("fill", 'beige')
          .attr("d", drawHandLine(hand))
          .attr("stroke", "black")
          .attr("stroke-width", 0.2)
          .attr('transform', "scale(1.05)")


      });


  });
}

drawSmallHands();

var mydata = [[10,4,9,3],[9,3,8,3],[8,3,7,2],[7,2,7,1],[7,1,6,1],[6,1,6,2],[6,2,7,3],[7,3,7,4],[7,4,6,4]]



}
