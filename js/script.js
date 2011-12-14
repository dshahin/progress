/* Author: Dan Shahin

*/


$(function(){
	
	function onYouTubePlayerReady(playerid) {
		 ytplayer = document.getElementById('myytplayer');
		alert('youtube ready:' +playerid);
	}
	
	console.log('first' + localStorage.getItem("progress"));
	if(localStorage.getItem("progress") == null){
		localStorage.setItem("progress", "0");
	}
	var prog = localStorage.getItem("progress");
	chrome.browserAction.setBadgeText({text:prog+'%'});
	$('#about').dialog({ autoOpen: false ,modal:true, title:'About'});
	//$.fx.speeds._default = 500;
	$('#attaboy').dialog({ autoOpen: false ,modal:true, title:'Success!', height:500, width:650, show: 'puff', hide:'explode'});
	$('#content').resizable();
	$( "#progressbar" ).progressbar({value: parseInt(prog)});
	$('#hey').button().click(function(){ 
		$("#about").dialog("open").html('you are ' +  localStorage.getItem("progress") + '% of the way there, keep going!' );
	});
	$('#step').button().click(function(){
			var val = localStorage.getItem("progress");
			if(isNaN(val)){
				val = 0;
			}
			val = parseInt(val) + 10;
			chrome.browserAction.setBadgeText({text:val+'%'});
			if(val>=100){
				$("#content").attr({'height': 550, 'width' : 700});
				$("#attaboy").dialog("open");
				$("#movie").show();
				val = 0;
				chrome.browserAction.setBadgeText({text:0+'%'});

			}else if (val == 50){
				//$("#attaboy").dialog("open").html('half way there!' );
			}else if (val == 1){
				//$("#attaboy").dialog("open").html('the journey of 1000 miles begins with the first step');
				$("#movie").hide();
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
