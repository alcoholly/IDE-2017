// Script used to normalize the data:
// sed 's/  */,/g' < station.txt > station_normalized.csv

d3.select(window).on('load', init);


function init() {

    // FIRST PLOT

    var margin1 = {top: 20, right: 20, bottom: 20, left: 50},
        width1 = 960 - margin1.left - margin1.right,
        height1 = 500 - margin1.top - margin1.bottom;

    var x1 = d3.scaleLinear().range([0, width1]);
    var y1 = d3.scaleLinear().range([height1, 0]);


    // append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin

    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);



    var svg1 = d3.select("#scatter").append("svg")
        .attr("width", width1 + margin1.left + margin1.right)
        .attr("height", height1 + margin1.top + margin1.bottom)
        .append("g") // The ‘g’ element is a container element for grouping together related graphics elements.
        .attr("transform",
            "translate(" + margin1.left + "," + margin1.top + ")");


    d3.csv("station_normalized.csv", function (error, data) {
        if (error) throw error;


        // Scale the range of the data
        x1.domain([d3.min(data, function(d){ return +d.YEAR;})-2, d3.max(data, function(d) {return +d.YEAR;})]);
        y1.domain([d3.min(data, function(d){ return +d.metANN;})-0.25, d3.max(data, function(d) {return +d.metANN;})]);

        // Add the scatterplot
        svg1.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("r", 4)
            .attr("class", "dot")
            .attr("cx", function(d) { return x1(d.YEAR); }) //set x nd y locations
            .attr("cy", function(d) { return y1(d.metANN); })
            .on("mouseover", function(d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div.html(d.YEAR + "<br/>" + d.metANN)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
        // Add the X Axis
        svg1.append("g")
            .attr("transform", "translate(0," + height1 + ")")
            .call(d3.axisBottom(x1));

        // Add the Y Axis
        svg1.append("g")
            .call(d3.axisLeft(y1));

    });
       // SECOND PLOT

   var margin2 = {top: 20, right: 20, bottom: 20, left: 50},
       width2 = 960 - margin2.left - margin2.right;
       height2 = 500 - margin2.top - margin2.bottom;

   var x = d3.scaleLinear().range([0, width2]);
   var y = d3.scaleLinear().range([height2, 0]);
   console.log(height2);

    // define the 1st line: winter
    var valueline = d3.line()
        .x(function(d) { return x(d.YEAR); })
        .y(function(d) { return y(d["D-J-F"]); });

    // define the 2nd line: spring
    var valueline2 = d3.line()
        .x(function(d) {  return x(d.YEAR); })
        .y(function(d) { return y(d["M-A-M"]); });

    // define the 3rd line: summer
    var valueline3 = d3.line()
        .x(function(d) {  return x(d.YEAR); })
        .y(function(d) { return y(d["J-J-A"]); });

    // define the 4th line: autumn

    var valueline4 = d3.line()
        .x(function(d) {  return x(d.YEAR); })
        .y(function(d) { return y(d["S-O-N"]); });

    // append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin

    var svg2 = d3.select("#scatter2").append("svg")
        .attr("width", width2 + margin2.left + margin2.right)
        .attr("height", height2 + margin2.top + margin2.bottom)
        .append("g") // The ‘g’ element is a container element for grouping together related graphics elements.
        .attr("transform",
            "translate(" + margin2.left + "," + margin2.top + ")");

    // Get the data
    d3.csv("station_normalized.csv", function(error, data) {
        if (error) throw error;

        // format the data
        data.forEach(function(d) {
            d.YEAR = +d.YEAR;
            d["D-J-F"] = +d["D-J-F"];
            d["M-A-M"] = +d["M-A-M"];
            d["J-J-A"] = +d["J-J-A"];
            d["S-O-N"] = +d["S-O-N"];

        });

        // Scale the range of the data
        x.domain(d3.extent(data, function(d) { return d.YEAR; }));
        y.domain([d3.min(data, function(d) {
            return Math.min(d["D-J-F"], d["M-A-M"], d["J-J-A"],d["S-O-N"] ); }), d3.max(data, function(d) {
            return Math.max(d["D-J-F"], d["M-A-M"], d["J-J-A"], d["S-O-N"] ); })]);

        // Add the valueline path.
        svg2.append("path")  //winter
            .data([data])
            .attr("class", "line")
            .attr("d", valueline);

        // Add the valueline2 path.
        svg2.append("path") //spring
            .data([data])
            .attr("class", "line")
            .style("stroke", "green")
            .attr("d", valueline2);

        // Add the valueline3 path.
        svg2.append("path") // summer
            .data([data])
            .attr("class", "line")
            .style("stroke", "red")
            .attr("d", valueline3);

        // Add the valueline4 path.
        svg2.append("path") // autumn
            .data([data])
            .attr("class", "line")
            .style("stroke", "brown")
            .attr("d", valueline4);

        // Add the X Axis
        svg2.append("g")
            .attr("transform", "translate(0," + height2 + ")")
            .call(d3.axisBottom(x));

        // Add the Y Axis
        svg2.append("g")
            .call(d3.axisLeft(y));


    });



// THIRD PLOT
    var margin = {top: 0, right: 0, bottom: 0, left: 25},
        width = parseFloat(d3.select('body').style('width')) - 20;
    var height = 500;


    var y3 = d3.scaleLinear().range([height, 0]);
    var x3 = d3.scaleBand().range([0, width]);

    var xAxis = d3.axisBottom(x3);
    var yAxis = d3.axisLeft(y3);

    var svg = d3.select("#barchart")
        .append("g")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("decade_means.csv", function(data) {

        data.forEach(function(d){
            var range= +d.decade + 9;
            d.decade = d.decade + '-' + range;
            d.mean = +d.mean;
        });

        x3.domain(data.map(function(d) { return d.decade; }))
            .paddingInner(0.1)
            .paddingOuter(0.2);
        y3.domain([0, d3.max(data, function(d) { return d.mean; }) + 0.5]);

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
            .attr("x", function(d) { return x3(d.decade); })
            .attr("width", x3.bandwidth())
            .attr("y", function(d) { return y3(d.mean); })
            .attr("height", function(d) { return height - y3(d.mean); });
    });
}