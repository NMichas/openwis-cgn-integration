/**
 * This is a collection of utility functions required to assist with injection of external modules into the original angular application.
 * It MUST be loaded before angular is loaded but after jQuery is loaded!  
 * @returns
 */
function JsUtil(){};

/**
 * This array will be populated with functions that will be executed on document.ready
 */
JsUtil.FunctionsToExecuteOnReady = new Array();

/**
 * This will loop through all functions registered for execution and run them.
 * Then it will clear the array. 
 */
JsUtil.executeFunctions = function(){
	for(var i=0;i<JsUtil.FunctionsToExecuteOnReady.length;i++){
		var f = JsUtil.FunctionsToExecuteOnReady[i];
		f();
	}
	JsUtil.FunctionsToExecuteOnReady.length = 0;
};

/**
 * Loads the contents of a specific URL (absolute or relative) into a JQuery object
 */
JsUtil.loadHtmlContentIntoElement = function(jqTargetElement, url){
	var tempDiv = $('<div></div>');
	jQuery.ajaxSetup({async:false});
	tempDiv.load(url, function(){
		tempDiv.children().each(function () {
			console.log('appending: ' + this.outerHTML);
			jqTargetElement.append($(this).clone());
		});
		tempDiv.remove();
		jQuery.ajaxSetup({async:true});
	});
}

/**
 * Runs on document.ready
 */
$(document).ready(function(){
	JsUtil.executeFunctions();	
});
