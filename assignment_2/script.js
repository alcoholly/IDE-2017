// Script used to normalize the data:
// sed 's/  */,/g' < station.txt > station_normalized.csv

d3.select(window).on('load', init);


function init() {

  var svg = d3.select("body").append("svg")
    .attr("width", 1000 + margin.left + margin.right)
    .attr("height", 1000 + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.csv(
    'station_normalized.csv',

    function(error, csv) {
      if (error) throw error;

      var i = 0;

      d3.select('body')
        .append('ul')
        .selectAll('li')
        .data(csv)
        .enter()
        .append('li')
        .text(function(d){
          i = i + 1;
          console.log(i);
          return d.YEAR + ' '
               + d.JAN + ' '
               + d.FEB + ' '
               + d.MAR + ' '
               + d.APR + ' '
               + d.MAY + ' '
               + d.JUN + ' '
               + d.JUL + ' '
               + d.AUG + ' '
               + d.SEP + ' '
               + d.OCT + ' '
               + d.NOV + ' '
               + d.DEC + ' '
               ;
        });
    });
}
