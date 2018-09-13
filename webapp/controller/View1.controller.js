sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	// "test/js/JsBarcode"
], function (Controller, Toast) {
	"use strict";
	return Controller.extend("test.com.test.controller.View1", {
		onInit: function () {
			jQuery.sap.require("sap.ndc.BarcodeScanner");
		},
		onScan: function () {
			sap.ndc.BarcodeScanner.scan(
				function (oResult) {
					console.log("result" + oResult);
					Toast.show(oResult.text);
				},
				function (oError) {
					console.log("Error: "+ oError);
				},
				function (oResult) {
					console.log("Result 2: "+ oResult);
				}
			);
		},
		onGenerateCodeBar: function(){
			var idInput= this.getView().byId("idInputCode");
			var value = idInput.getValue();
			JsBarcode(".barcode", value, {format: "CODE128"});
		}
	});
});