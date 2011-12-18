
var app ={
	ready : 
		function() {
			var data = [10,80,90, 99, 101,98,54, 57, 112, 150, 151];
			var
				w = 700	,
				h = 200,
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

		  $('#chart button').toggle( function() {
			svg.selectAll('circle')
			.transition()
				.duration(750)
				.attr('r', 12)
				.style('stroke-opacity', 1)
				.style("fill", "steelblue")
				.attr("cy", 90)
				.attr("r", 30)
			;
			/*
			svg.selectAll('circle.select').remove();
			svg.selectAll('circle.select')
				.data(data)
			  .enter().append('svg:circle')
				.attr('class', 'select')
				.attr('cx', x)
				.attr('cy', y)
				.attr('r', 60)
				.style('fill', 'none')
				.style('stroke', 'red')
				.style('stroke-opacity', 1e-6)
				.style('stroke-width', 3)
			  .transition()
				.duration(750)
				.attr('r', 12)
				.style('stroke-opacity', 1);
			*/
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
