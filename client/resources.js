
$(function () {
	$('#burndownTotalDirectExpensesContainer').highcharts({
		chart: { type: 'areaspline', zoomType: 'xy' },
		title: { text: 'Total Direct Expenses' },
		subtitle: { text: 'Budget Burndown' },
		xAxis: { categories: ['Jan 14', 'Feb 14', 'Mar 14', 'Apr 14', 'May 14', 'Jun 14', 'Jul 14', 'Aug 14', 'Sep 14', 'Oct 14', 'Nov 14', 'Dec 14']},
		yAxis: { title: { text: 'In US Dollars', style: { color: Highcharts.getOptions().colors[1] }}},
		plotOptions: { area: { marker: { symbol: 'circle', radius: 1, states: { hover: { enabled: true }}}}},
		series: [{
			name: 'Budget',
			color: Highcharts.getOptions().colors[2],
			type: 'area',
			data: [
				2940565, 2672609, 2397144, 2133962, 1868798, 1603540,
				1335137, 1068034,  803605,  535197,  268273, 0
			],
			tooltip: { valuePrefix: '$' }
		}, {
			name: 'Actuals',
			color: Highcharts.getOptions().colors[3],
			type: 'spline',
			data: [
				3021001, 2848881, 2576689, 2379742, 2012701, 1747741,
				1372312, 1081031,  776605,  475097,  200320

			],
			tooltip: { valuePrefix: '$' }, marker: { lineWidth: 2, lineColor: Highcharts.getOptions().colors[3], symbol: 'circle', fillColor: 'white' }
		}, {
			name: 'Actuals w/o Contractors',
			color: Highcharts.getOptions().colors[4],
			type: 'spline',
			data: [
				3013463, 2841135, 2596908, 2396973, 2188587, 1956026, 
				1596891, 1341962, 1109968,  868961,  647260			
			],
			tooltip: { valuePrefix: '$' }, marker: { lineWidth: 2, lineColor: Highcharts.getOptions().colors[4], symbol: 'circle', fillColor: 'white' }
		}]
	});
});


$(function () {
	$('#chartDirectExpensesContainer1').highcharts({
		chart: { type: 'column' },
		title: { text: 'Budget vs Actuals' },
		xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']},
		yAxis: { title: { text: 'In US Dollars' } },
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
			footerFormat: '</table>', shared: true, useHTML: true
		},
		plotOptions: { column: { pointPadding: 0, borderWidth: 0 } },
		series: [{
			name: 'YTD Savings',
			color: Highcharts.getOptions().colors[3],
			data: [
				  80436,  256708,  436253, 682034, 825937, 970138, 
				1007313, 1020310,  993310, 933209, 865256, 0
			]
		}]
	});
});


$(function () {
	$('#chartDirectExpensesContainer2').highcharts({
		chart: { type: 'column' },
		title: { text: 'Budget vs Actuals w/o Contractors' },
		xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']},
		yAxis: { min: 0, title: { text: 'In US Dollars' } },
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
			footerFormat: '</table>', shared: true, useHTML: true
		},
		plotOptions: { column: { pointPadding: 0, borderWidth: 0 } },
		series: [{
			name: 'YTD Savings',
			color: Highcharts.getOptions().colors[4],
			data: [
				  72898,  248962,  456472,  699264, 1001823, 1178423, 
				1231892, 1281242, 1326673, 1327073, 1312196, 0
			]
		}]
	});
});


$(function () {
	$('#wagesContainer').highcharts({
		chart: { type: 'areaspline', zoomType: 'xy' },
		title: { text: 'Wages & Fringes' },
		subtitle: { text: 'Budget Burndown' },
		xAxis: { categories: ['Jan 14', 'Feb 14', 'Mar 14', 'Apr 14', 'May 14', 'Jun 14', 'Jul 14', 'Aug 14', 'Sep 14', 'Oct 14', 'Nov 14', 'Dec 14',]},
		yAxis: { title: { text: 'In US Dollars', style: { color: Highcharts.getOptions().colors[1] }}},
		plotOptions: { area: { marker: { symbol: 'circle', radius: 1, states: { hover: { enabled: true }}}}},
		series: [{
			name: 'Budget',
			color: Highcharts.getOptions().colors[2],
			type: 'area',
			data: [
				2572540, 2339186, 2098187, 1865025, 1631848, 1399227, 
				1165427,  932789,  699620,  465815,  233808, 0 
			],
			tooltip: { valuePrefix: '$' }
		}, {
			name: 'Actuals',
			color: Highcharts.getOptions().colors[3],
			type: 'spline',
			data: [
				2649775, 2510550, 2270402, 2101539, 1768761, 1544975, 
				1220249,  966710,  697897,  426751,  183796

			],
			tooltip: { valuePrefix: '$' }, marker: { lineWidth: 2, lineColor: Highcharts.getOptions().colors[3], symbol: 'circle', fillColor: 'white' }

		}, {
			name: 'Actuals w/o Contractors',
			color: Highcharts.getOptions().colors[4],
			type: 'spline',
			data: [
				2642237, 2502804, 2290620, 2118770, 1944647, 1753261, 
				1444828, 1227642, 1031261,  820616,  630736
			],
			tooltip: { valuePrefix: '$' }, marker: { lineWidth: 2, lineColor: Highcharts.getOptions().colors[4], symbol: 'circle', fillColor: 'white' }
		}]
	});
});


// $(function () {
// 	$('#chartWagesContainer1').highcharts({
// 		chart: { type: 'column' },
// 		title: { text: 'Budget vs Actuals' },
// 		xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']},
// 		yAxis: { min: 0, title: { text: 'In US Dollars' } },
// 		tooltip: {
// 			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
// 			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
// 			footerFormat: '</table>', shared: true, useHTML: true
// 		},
// 		plotOptions: { column: { pointPadding: 0, borderWidth: 0 } },
// 		series: [{
// 			name: 'YTD Savings',
// 			color: Highcharts.getOptions().colors[3],
// 			data: [
// 				  80436,  256708,  436253, 682034, 825937, 970138, 
// 				1007313, 1020310, 1003706, 
// 			]
// 		}]
// 	});
// });


// $(function () {
// 	$('#chartWagesContainer2').highcharts({
// 		chart: { type: 'column' },
// 		title: { text: 'Budget vs Actuals w/o Contractors' },
// 		xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']},
// 		yAxis: { min: 0, title: { text: 'In US Dollars' } },
// 		tooltip: {
// 			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
// 			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
// 			footerFormat: '</table>', shared: true, useHTML: true
// 		},
// 		plotOptions: { column: { pointPadding: 0, borderWidth: 0 } },
// 		series: [{
// 			name: 'YTD Savings',
// 			color: Highcharts.getOptions().colors[4],
// 			data: [
// 				  80436,  256708,  436253, 682034, 825937, 970138, 
// 				1007313, 1020310, 1003706
// 			]
// 		}]
// 	});
// });


$(function () {
	$('#communicationsContainer').highcharts({
		chart: { type: 'areaspline', zoomType: 'xy' },
		title: { text: 'Communication Expenses' },
		subtitle: { text: 'Budget Burndown' },
		xAxis: { categories: ['Jan 14', 'Feb 14', 'Mar 14', 'Apr 14', 'May 14', 'Jun 14', 'Jul 14', 'Aug 14', 'Sep 14', 'Oct 14', 'Nov 14', 'Dec 14',]},
		yAxis: { title: { text: 'In US Dollars', style: { color: Highcharts.getOptions().colors[1] }}},
		plotOptions: { area: { marker: { symbol: 'circle', radius: 1, states: { hover: { enabled: true }}}}},

		series: [{
			name: 'Budget',
			color: Highcharts.getOptions().colors[2],
			type: 'area',
			data: [
				2629, 2390, 2151, 1912, 1673, 1434, 
				1195,  956,  717,  478,  239, 0
			],
			tooltip: {
				valuePrefix: '$'
			}
		}, {
			name: 'Actuals',
			color: Highcharts.getOptions().colors[3],
			type: 'spline',
			data: [
				 2230,   1161,    140,   -491,   -2002, -4131, 
				-5018, -10095, -11784, -13152, - 15265 
			],
			tooltip: { valuePrefix: '$' }, marker: { lineWidth: 2, lineColor: Highcharts.getOptions().colors[3], fillColor: 'white' }
		}]
	});
});


$(function () {
	$('#recwelContainer').highcharts({
		chart: { type: 'areaspline', zoomType: 'xy' },
		title: { text: 'Recreation & Welfare Expenses' },
		subtitle: { text: 'Budget Burndown' },
		xAxis: { categories: ['Jan 14', 'Feb 14', 'Mar 14', 'Apr 14', 'May 14', 'Jun 14', 'Jul 14', 'Aug 14', 'Sep 14', 'Oct 14', 'Nov 14', 'Dec 14',]},
		yAxis: { title: { text: 'In US Dollars', style: { color: Highcharts.getOptions().colors[1] }}},
		plotOptions: { area: { marker: { symbol: 'circle', radius: 1, states: { hover: { enabled: true }}}}},
		series: [{
			name: 'Budget',
			color: Highcharts.getOptions().colors[2],
			type: 'area',
			data: [
				5264, 4786, 4307, 3829, 3350, 2872, 
				2393, 1914, 1436,  957,  479, 0
			],
			tooltip: {
				valuePrefix: '$'
			}
		}, {
			name: 'Actuals',
			color: Highcharts.getOptions().colors[3],
			type: 'spline',
			data: [
				5743, 5652, 5652, 5351, 5018, 5061, 
				4915, 4915, 4915, 4915, 4915
			],
			tooltip: { valuePrefix: '$' }, marker: { lineWidth: 2, lineColor: Highcharts.getOptions().colors[3], fillColor: 'white' }
		}]
	});
});


$(function () {
	$('#trainingContainer').highcharts({
		chart: { type: 'areaspline', zoomType: 'xy' },
		title: { text: 'Training & Seminar Expenses' },
		subtitle: { text: 'Budget Burndown' },
		xAxis: { categories: ['Jan 14', 'Feb 14', 'Mar 14', 'Apr 14', 'May 14', 'Jun 14', 'Jul 14', 'Aug 14', 'Sep 14', 'Oct 14', 'Nov 14', 'Dec 14',]},
		yAxis: { title: { text: 'In US Dollars', style: { color: Highcharts.getOptions().colors[1] }}},
		plotOptions: { area: { marker: { symbol: 'circle', radius: 1, states: { hover: { enabled: true }}}}},
		series: [{
			name: 'Budget',
			color: Highcharts.getOptions().colors[2],
			type: 'area',
			data: [
				20285, 18482, 16679, 14876, 13073, 11270,  
				 9467,  7664,  5861,  4058,  1803, 0
			],
			tooltip: {
				valuePrefix: '$'
			}
		}, {
			name: 'Actuals',
			color: Highcharts.getOptions().colors[3],
			type: 'spline',
			data: [
				19430, 19430, 19056, 18957, 18957, 18907, 
				18397, 16779, 12707, 12816, 12816
			],
			tooltip: { valuePrefix: '$' }, marker: { lineWidth: 2, lineColor: Highcharts.getOptions().colors[3], fillColor: 'white' }
		}]
	});
});


$(function () {
	$('#travelContainer').highcharts({
		chart: { type: 'areaspline', zoomType: 'xy' },
		title: { text: 'Travel & Entertainment Expenses' },
		subtitle: { text: 'Budget Burndown' },
		xAxis: { categories: [
					'Jan 14', 'Feb 14', 'Mar 14', 'Apr 14', 'May 14', 
					'Jun 14', 'Jul 14', 'Aug 14', 'Sep 14', 'Oct 14', 
					'Nov 14', 'Dec 14',
					]},
		yAxis: { title: { text: 'In US Dollars', style: { color: Highcharts.getOptions().colors[1] }}},
		plotOptions: { area: { marker: { symbol: 'circle', radius: 1, states: { hover: { enabled: true }}}}},
		series: [{
			name: 'Budget',
			color: Highcharts.getOptions().colors[2],
			type: 'area',
			data: [
				63466, 56510, 49691, 47316, 42975, 37984, 
				31027, 24208, 20594, 13638,  6819, 0
			],
			tooltip: {
				valuePrefix: '$'
			}
		}, {
			name: 'Actuals',
			color: Highcharts.getOptions().colors[3],
			type: 'spline',
			data: [
				68295, 61969, 56924, 55485, 48819, 38720, 
				31890, 27235, 25386, 22494, 20079	
			],
			tooltip: { valuePrefix: '$' }, marker: { lineWidth: 2, lineColor: Highcharts.getOptions().colors[3], fillColor: 'white' }
		}]
	});
});


$(function () {
	$('#expensesContainer').highcharts({
		chart: {
			type: 'areaspline',
			zoomType: 'x'
		},
		title: {
			text: 'Total Direct Expenses'
		},
		subtitle: {
			text: 'Historical View & Trend'
		},
		xAxis: {
			categories: 
				[
									'Mar 13', 'Apr 13', 'May 13', 'Jun 13', 
				'Jul 13', 'Aug 13', 'Sep 13', 'Oct 13', 'Nov 13', 'Dec 13',
				'Jan 14', 'Feb 14', 'Mar 14', 'Apr 14', 'May 14', 'Jun 14', 
				'Jul 14', 'Aug 14', 'Sep 14', 'Oct 14', 'Nov 14', 'Dec 14',
				'Jan 15', 'Feb 15', 'Mar 15', 'Apr 15', 'May 15', 'Jun 15', 
				'Jul 15', 'Aug 15', 'Sep 15', 'Oct 15', 'Nov 15', 'Dec 15'
				],
		plotBands: [{
			from: -0.5,
			to: 10,
			color: 'rgba(68, 170, 213, .2)'
			}]
		},
		yAxis: {
			title: {
				text: 'In US Dollars',
				style: {
					color: Highcharts.getOptions().colors[1]
				}
			}
		},
		plotOptions: {
			area: {
				marker: {
					symbol: 'circle',
					radius: 1,
					states: {
						hover: {
							enabled: true
						}
					}
				}
			}
		},
		series: [{
			name: 'Forecast',
			type: 'area',
			data: [
							  null,   null, 114770, 179742, 
			184910, 184910, 185351, 184910, 184910, 185351,

			274292, 274292, 274289, 271307, 271307, 284450, 
			284450, 271307, 271307, 271307, 271307, 271307,

			271307, 271307, 271307, 271307, 271307, 271307, 
			271307, 271307, 271307, 271307, 271307, 271307
			],
			tooltip: {
				valuePrefix: '$'
			}

		}, {
			name: 'Actuals',
			type: 'area',
			data: [
							 66603, 139879, 187161, 172132, 
			180354, 182918, 167769, 172656, 179768, 184731,

			189281, 172120, 272191, 196947, 367041, 264960, 
			375428, 291281, 294030

			//207338, 202585, 226559, 219465, 218909, 213653, 
			//null,     null,   null,   null,   null,   null
			],
			tooltip: {
				valuePrefix: '$'
			}
		}, {
			name: 'Budget',
			color: Highcharts.getOptions().colors[3],
			type: 'spline',
			data: [
							  null,   null,   null,   null, 
			  null,   null,   null,   null,   null,   null,

			269717, 267956, 275465, 263183, 265164, 265258, 
			268403, 267103, 264429, 268408, 266924, 268273

			//277051, 277051, 283960, 271069, 273035, 273685, 
			//273685, 273685, 273685, 273685, 273685, 273685
			],
			tooltip: {
				valuePrefix: '$'
			},
			marker: {
				lineWidth: 2,
				lineColor: Highcharts.getOptions().colors[3],
				fillColor: 'white'
			}
		}]
	});
});

$(function () {
    $('#adoptionContainer').highcharts({
        chart: { type: 'column' },
        title: { text: 'JIRA Usage 2014' },
        xAxis: { categories: ['Release 1', 'Release 2', 'Release 3', 'Release 4'] },
        yAxis: { min: 0, title: { text: 'Total # of stories/defects opened' },
            stackLabels: { enabled: true, style: { fontWeight: 'bold', color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray' }}},
        legend: { align: 'right', x: -70, verticalAlign: 'top', y: 20, floating: true, backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white', borderColor: '#CCC', borderWidth: 1, shadow: false },
        tooltip: { formatter: function () { return '<b>' + this.x + '</b><br/>' + 'Total: ' + this.point.stackTotal; } },
        plotOptions: { column: { stacking: 'normal', dataLabels: { enabled: true, color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white', style: { textShadow: '0 0 3px black, 0 0 3px black' } } } },
        series: [{
            name: 'WBMS',
            data: [32, 153, 194, null]
        }, {
            name: 'TSM',
            data: [10, 118, 107, null]
        }, {
            name: 'SV',
            data: [36, 295, 616, null]
        }, {
            name: 'Internal',
            data: [116, 81, 159, null]
        }]
    });
});
