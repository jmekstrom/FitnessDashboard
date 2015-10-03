$(function () {
    
    var d1, d2, d3, data, chartOptions;

    d1 = [
        [1262304000000, 230], [1264982400000, 225], [1267401600000, 220], [1270080000000, 215],
        [1272672000000, 210], [1275350400000, 205], [1277942400000, 200], [1280620800000, 195],
        [1283299200000, 190], [1285891200000, 185], [1288569600000, 180], [1291161600000, 175]
    ];
 
    d2 = [
        [1262304000000, 231], [1264982400000, 223], [1267401600000, 221.5], [1270080000000, 213.2],
        [1272672000000, 210.2], [1275350400000, 206.1], [1277942400000, 199.5], [1280620800000, 194.2],
        [1283299200000, 189], [1285891200000, 188], [1288569600000, 185], [1291161600000, 183]
    ];

    d3 = [
        [1262304000000, 229], [1264982400000, 221], [1267401600000, 222.5], [1270080000000, 216.2],
        [1272672000000, 208.2], [1275350400000, 204.1], [1277942400000, 197.5], [1280620800000, 193.2],
        [1283299200000, 187], [1285891200000, 185], [1288569600000, 189], [1291161600000, 185]
    ];

    data = [{ 
        label: "Plan Weight",
        data: d1
    }, {
        label: "Actual Weight",
        data: d2
    }, {
        label: "Calculated Weight",
        data: d3
    }];
 
    chartOptions = {
        xaxis: {
            min: (new Date(2009, 12, 1)).getTime(),
            max: (new Date(2010, 11, 2)).getTime(),
            mode: "time",
            tickSize: [1, "month"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tickLength: 0
        },
        yaxis: {

        },
        series: {
            lines: {
                show: true, 
                fill: false,
                lineWidth: 3
            },
            points: {
                show: true,
                radius: 4.5,
                fill: true,
                fillColor: "#ffffff",
                lineWidth: 2.75
            }
        },
       grid: { 
            hoverable: true, 
            clickable: false, 
            borderWidth: 0 
        },
        legend: {
            show: true
        },
        
        tooltip: true,
        tooltipOpts: {
            content: '%s: %y'
        },
        colors: App.chartColors
    };

    

    var holder = $('#line-chart');

    if (holder.length) {
        $.plot(holder, data, chartOptions );
    }


});