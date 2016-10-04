(function() {
	goog.provide('openwis-module-inject-poc-controller');

	var module = angular.module('openwis-module-inject-poc-controller', []);

	/**
	 * This module does not actually define any content. The controller we want
	 * to hijack is loaded by an ng-include and this means that it is
	 * out-of-reach since angular initializes it before we can get our hands on
	 * it.
	 * 
	 * This module only exists because of the wro4j limitations (no JS loads
	 * unless it's in lib.js or unless it's on a dependency tree)
	 */

})();

/**
 * Push a function to be executed on document.ready. This function will load an
 * html fragment containing a script and append it to the body. That script
 * contains further instructions for angular that could not be loaded because of
 * the wro4j limitations.
 * 
 */
JsUtil.FunctionsToExecuteOnReady
		.push(function() {
			JsUtil
					.loadHtmlContentIntoElement(
							$(document.body),
							'/geonetwork/catalog/components/openwis-module-inject-poc/helper/injection-helper.html');
		});
