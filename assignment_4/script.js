

d3.select(window).on('load', init);

var handSvg;

function init() {
function getHandCoordinates(data){
  coords = []
  for (var i = 0; i < 55; i++){
    coords[i] = {'x': data[i], 'y': data[i+56]};
  }
  return coords;
}


function drawHand(index){
  handLines.selectAll('line').data(hand)
  .transition()
  .duration(500)
  .ease("elastic")
  .each("start", function(){
    d3.select(this)
    .attr('stroke-width', lineWidth * 2)
    .attr("stroke", complemColor);})
    .attr('x1', function(d, i){
        if(i > 0){
            return xScale(hands[currentHandIndex][i-1].x);
        }
        else{
            return xScale(d.x);
        }
        })
    .attr('y1', function(d, i){
        if(i > 0){
            return yScale(hands[currentHandIndex][i-1].y);
        }
        else{
            return yScale(d.y);
        }
    })
    .attr('x2', function(d){ return xScale(d.x)})
    .attr('y2', function(d){ return yScale(d.y)
    })
    .each('end', function(){
        d3.select(this)
        .transition()
        .duration(100)
        .attr('stroke-width', lineWidth)
        .attr('stroke', secondaryColor)}
    );

    handCircles.selectAll('circle').data(hand)
    .transition()
    .duration(500)
    .ease("elastic")
    .each("start", function(){d3.select(this)
            .attr('r', cirleRad*2)
            .attr("fill", complemColor);})
    .attr('cx', function(d){return xScale(d.x); })
    .attr('cy', function(d){return yScale(d.y); })
    .each('end', function(){
        d3.select(this)
        .transition()
        .duration(100)
        .attr('fill', secondaryColor)
        .attr('r', '3')
        });
}

drawHand(0);




}

d3.text('hands.csv', function(text) {
    var data = d3.csvParseRows(text);
    hand = getHandCoordinates(data[0])
    hand.forEach(function(d){


    });

});
