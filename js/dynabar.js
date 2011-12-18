
var dynabar ={
	chart: null,
	x : null,
	y : null,
	w : 10,
	h : 100,
	numBars : 65,
	everyInterval : 1000,
	interval : null,
	refresh : function(){
		  	dynabar.data.shift();
			dynabar.data.push(dynabar.next());
		   	dynabar.redraw();
	},
	ready : function() {
      	dynabar.data = d3.range(dynabar.numBars).map(dynabar.next); // starting dataset
		dynabar.interval = setInterval( dynabar.refresh , dynabar.everyInterval);

		$('svg').live('mouseover',function(){
			//clearInterval(dynabar.interval);
		}).live('mouseout', function(){
			//dynabar.interval = setInterval(dynabar.refresh, everyInterval);
		});

		$('rect').live('mouseover',function(){
			console.log('foo'+ $(this).attr('height'));
		});

		dynabar.x = d3.scale.linear()
			.domain([0,1])
			.range([0,dynabar.w]);

		dynabar.y = d3.scale.linear()
			.domain([0,100])
			.rangeRound([0,dynabar.h]);

		dynabar.chart = d3.select('body')
			.append('svg:svg')
			.attr('class','chart')
			.attr('width', dynabar.w * dynabar.data.length + 1)
			.attr('height', dynabar.h);

		dynabar.chart.selectAll("rect")
			.data(dynabar.data)
		  .enter().append('svg:rect')
			.attr('x', function(d,i) { return dynabar.x(i) - .5 })
			.attr('y', function(d) {return dynabar.h - dynabar.y(d.value) - .5;})
			.attr('width', dynabar.w)
			.attr('height', function(d) {return dynabar.y(d.value);});
	
		dynabar.chart.append('svg:line')
			.attr('x1',0)
			.attr('x2',dynabar.w* dynabar.data.length)
			.attr('y1', dynabar.h-.5)
			.attr('y2', dynabar.h-.5)
			.attr('stroke','#000');
		
	},
	data :[],
	t: 1297110663,
	v: 70,
	next: function(){
		return {
		  time: ++dynabar.t,
		  value: dynabar.v = Math.max(10, Math.min(90, dynabar.v + 10 * (Math.random() - .5)))
		};
	},
	redraw: function(){
		var rect = dynabar.chart.selectAll("rect")
			.data(dynabar.data, function(d) { return d.time; });
		rect.enter().insert("svg:rect", "line")
			.attr("x", function(d, i) { return dynabar.x(i + 1) - .5; })
			.attr("y", function(d) { return dynabar.h - dynabar.y(d.value) - .5; })
			.attr("width", dynabar.w)
			.attr("height", function(d) { return dynabar.y(d.value); })
		   .transition()
			.duration(900)
			.attr("x", function(d, i) { return dynabar.x(i) - .5; });

		rect.transition()
			.duration(900)
			.attr("x", function(d, i) { return dynabar.x(i) - .5; });

		rect.exit().transition()
			.duration(900)
			.attr("x", function(d, i) { return dynabar.x(i - 1) - .5; })
			.remove();
	}
}
//jquery ready function
$(dynabar.ready);
