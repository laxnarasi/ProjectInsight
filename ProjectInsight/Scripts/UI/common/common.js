/*
	1.This file used to have get the values which used across the screens like dropdown etc...
	2.Common functions like form validation etc....
*/


function GetPractices() {
	return $.ajax({
		url: path + "PracticeMaster/GetPractices", 
		type: "get",
		contentType: "application/json"
	 });
}

 

function GetProjects(accountId) {
	var dynamicData = {};
	dynamicData["accountId"] = accountId;
	return $.ajax({
		url: path + "PracticeMaster/GetProjects",  
		type: "get",
		contentType: "application/json",
		data: dynamicData
	});
}


function ValidateForm() {
    var result = true;
    for (var i = 0; i < arguments.length; i++) {
        el = arguments[i];
        var target = $("#" + el);
        var multipleAttribute = $(target).attr("multiple");
       
        if (multipleAttribute == "multiple") {
            if (target.val() == null) {
                var $group = target.closest('.form-group');
                $group.addClass('has-error has-danger');
                result = false;
            }
            
        }
        else if (target.val() == null || target.val() == "") {
            var $group = target.closest('.form-group');
            $group.addClass('has-error has-danger');
            result = false;
        }
    }
    return result;
}