$(function () {

	if (!$('#area-chart').length) { return false; }
	
	area ();	

	$(window).resize (App.debounce (area, 250));

});

function area () {
	$('#area-chart').empty ();

	Morris.Area ({
		element: 'area-chart',
		data: [
			{period: '2010 Q1', plan: 230, calculated: 229, actual: 231},
			{period: '2010 Q2', plan: 225, calculated: 224, actual: 226},
			{period: '2010 Q3', plan: 220, calculated: 222, actual: 221},
			{period: '2010 Q4', plan: 215, calculated: 216, actual: 216},
			{period: '2011 Q1', plan: 210, calculated: 209, actual: 209},
			{period: '2011 Q2', plan: 205, calculated: 203, actual: 206},
			{period: '2011 Q3', plan: 200, calculated: 199, actual: 205},
			{period: '2011 Q4', plan: 195, calculated: 196, actual: 198},
			{period: '2012 Q1', plan: 190, calculated: 189, actual: 189},
			{period: '2012 Q2', plan: 185, calculated: 184, actual: 170}
		],
		xkey: 'period',
		ykeys: [ 'plan', 'calculated', 'actual'],
		labels: [ 'plan', 'calculated', 'actual'],
		pointSize: 3,
		hideHover: 'auto',
		lineColors: [App.chartColors[0], App.chartColors[1], App.chartColors[3]]
	});
}