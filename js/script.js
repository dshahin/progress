/* Author: Dan Shahin

*/


$(function(){
	if(isNaN(localStorage.getItem("progress"))){
		localStorage.setItem("progress", "0");
	}
	var prog = 0;
	if (typeof(localStorage) == 'undefined' ) {
		alert('Your browser does not support HTML5 localStorage. Try upgrading.');
	}else{
		prog = localStorage.getItem("progress")
		//alert('Your browser does  support HTML5 localStorage. :' + prog);
	}

	
	var prog = parseInt(localStorage.getItem("progress"));
	if(typeof(prog) !=  "number"){
		prog = parseInt(prog);
		alert(prog + ' not undef'+ typeof(prog));
	}
	//console.log('foo' + prog);
	$('#about').dialog({ autoOpen: false ,modal:true, title:'About'});
	$('#attaboy').dialog({ autoOpen: false ,modal:true, title:'Alert'});

	$( "#progressbar" ).progressbar({value: prog});
	$('#hey').button().click(function(){
		$("#about").dialog("open");
	});
	$('#step').button().click(function(){
			var val = localStorage.getItem("progress");
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
