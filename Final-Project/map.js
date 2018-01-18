$('#community_select').on('change', function() {
    map.column(this.value).update()
})


var map = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .colors(['#ffffb2','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#b10026'])
    .column('svensk-folk-swedish-alt-country')
    .legend(true)
    .format(d3.format(',.0f'))
    .unitId('country');


d3.csv('data/map_data.csv', function(error, data) {
    d3.select('#map')
        .call(map.draw, map)
        .datum(data)
        .attr('asd','adssad')
        .call(map.draw, map);
});


setTimeout(function(){

    $( "path" ).hover(function( ) {
        var data = $( this ).text().split("\n");
        $(this).attr("title","");
        country = data[0]
        community = ""

        if (data.length === 1){
            community = "No data"
        } else {
            community = data[2]
        }

        $('#tooltip-header').html(country);
        $('#tooltip-community').html(community);

        $('#tooltip').css('display', 'block');


    });

    $( "path" ).mouseout(function( ) {
        $('#tooltip').css('display', 'none');
    });

}, 200);


$(document).bind('mousemove', function(e){
    $('#tooltip').css({left: e.pageX + 20, top: e.pageY + 10});
});

