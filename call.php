<?php

if(isset($_GET['ajaxwrapper'])){
	//for presentation purpose
	sleep(1);
	//create an object to return
	$echo_data 					= new stdClass();
	//decode the sendData
	$data 						= json_decode($_GET['ajaxwrapper']);
	//get the content to give back
	$echo_data->ajax_id		 	= $data->ajax_id;
	$echo_data->content 		= "Here some new content";
	//return the data
	echo json_encode($echo_data);
}

?>