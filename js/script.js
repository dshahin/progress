/* Author: Dan Shahin

*/


$(function(){
	console.log('first' + localStorage.getItem("progress"));
	if(localStorage.getItem("progress") == null){
		localStorage.setItem("progress", "0");
	}
	var prog = localStorage.getItem("progress");
	$('#about').dialog({ autoOpen: false ,modal:true, title:'About'});
	$('#attaboy').dialog({ autoOpen: false ,modal:true, title:'Alert'});

	$( "#progressbar" ).progressbar({value: parseInt(prog)});
	$('#hey').button().click(function(){ 
		$("#about").dialog("open").html('you are ' +  localStorage.getItem("progress") + '% of the way there, keep going!' );
	});
	$('#step').button().click(function(){
			var val = localStorage.getItem("progress");
			if(isNaN(val)){
				val = 0;
			}
			val = parseInt(val) + 1;
			if(val>=100){
				$("#attaboy").dialog("open").html('great job!');
				val = 0;
			}else if (val == 50){
				$("#attaboy").dialog("open").html('half way there!' );
			}else if (val == 1){
				$("#attaboy").dialog("open").html('the journey of 1000 miles begins with the first step');
			}else{
				//$("#attaboy").dialog("open").html('you are ' + val + '% of the way there, keep going!' );
			}
			localStorage.setItem("progress", val);
			console.log('click' + localStorage.getItem("progress"));
			$( "#progressbar" ).progressbar({
				value: val
			});
			
	});
		
});
