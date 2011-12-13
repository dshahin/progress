/* Author: Dan Shahin

*/


$(function(){
	$('#about').dialog({ autoOpen: false ,modal:true, title:'About'});
	$('#hey').button().click(function(){
			$('#about').dialog('open');
		});
		
});
