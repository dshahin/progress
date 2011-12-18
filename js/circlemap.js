
var app ={
	ready : 
		function() {
			//var data = [10,80,90, 99, 101,98,54, 57, 112, 150, 151];
			var data = [
				{x:10,y:10,name:'foo'},
				{x:20,y:20,name:'foo'},
				{x:30,y:30,name:'foo'},
			]
			var
				w = 700	,
				h = 800,
				x = d3.scale.ordinal().domain(data).rangePoints([0, w], 1),
				y = d3.scale.ordinal().domain(data).rangePoints([0, h], 2);
		
			var svg = d3.select('#chart').append('svg:svg')
			  .attr('width', w)
			  .attr('height', h);

			svg.selectAll('circle')
			  .data(data)
			 .enter().append('svg:circle')
			  .attr('class', 'little')
			  .attr('cx', x)
			  .attr('cy', y)
			  .attr('r', 10);

		  $('#chart').toggle( function() {
			svg.selectAll('circle')
			.transition()
				.duration(750)
				.attr('r', 12)
				.style('stroke-opacity', 1)
				.style("fill", "steelblue")
				.attr("cy", 90)
				.attr("r", 30)
			;
		  },
			function(){
			svg.selectAll('circle')
			.transition()
				.duration(750)
				.attr('r', 12)
				.style('stroke-opacity', 1)
				.style("fill", "green")
				.attr("cy", 90)
				.attr("r", 5);

		});
		}
}
//jquery ready function
$(app.ready);
