/*
 * code by Sven Delueg
 * http://delueg.org
 * svendelueg@gmail.com
 * http://heartcoded.de
 *
 * This is a piece of software free to use
 * Just keep this comment-block inside
 *
 * ajax-wrapper_ is to easify ajax request handling
 * */
;var ajax_wrapper_ = function(){};
ajax_wrapper_.prototype = {

	//only to test if initialised
	"init"	:	(function ( $, window, document, undefined ) {
		return function(){
			if(console && console.log){
				console.log("It's working!");
			}
		}
	})($, window, document, undefined),

	//the ajaxcall-function
	"call"	:	(function($, window, document, undefined){
		return function(callObj,options,responseHandler){
			/*setup for the jquery ajax call*/
			$.ajax({
				"url"		:  	callObj.url,
				"async"		: 	options.async 		? options.async 	: true,
				"type"		: 	options.type 		? options.type 		: 'POST',
				"datatype"	: 	options.datatype 	? options.datatype 	: 'JSON',
				"cache"		:   options.cache 		? options.cache 	: true,
				"data"		: 	{"ajaxwrapper":JSON.stringify(callObj.data)}
			})
				/*Response Functions*/
				.done(
				function(data, textStatus, jqXHR) {
					if( responseHandler.doneFunc ){
						responseHandler.doneFunc(data);
					}else{
						if(console && console.log){
							console.log("success: "+data);
						}
					}
				}
			)
				.fail(
				function(jqXHR, textStatus, errorThrown) {
					if( responseHandler.failFunc ){
						responseHandler.failFunc(jqXHR, textStatus, errorThrown);
					}else{
						if(console && console.log){
							console.log("some error occured");
							console.log(jqXHR);
							console.log(textStatus);
							console.log(errorThrown);
						}
					}
				}
			)
				.always(
				function(datajqXHR, textStatus, jqXHRerrorThrown){
					if( responseHandler.alwaysFunc ){
						responseHandler.alwaysFunc(datajqXHR, textStatus, jqXHRerrorThrown);
					}else{
						if(console && console.log){
							console.log("there was an ajaxwrapper-call");
						}
					}
				}
			);//end of $.ajax
		}//end of return function
	})($, window, document, undefined)//end of call function
};
