var express = require('express');
var router = express.Router();
var url = require('url');


/* GET home page. */
exports.indexPage = function(req, res) {
  res.status(403).send();
};


exports.lockboxInboundHome = function(req, res){
	var query = url.parse(req.url,true).query;
	var groupCode 	= query.forGroupCode;
	var siteNumber 	= query.forSiteNumber;
	var lockboxInbound = {};


	if(groupCode && siteNumber){

		//put code for filter

	}
	else{

		lockboxInbound.fileInProcess = Math.floor((Math.random() * 1000) + 1);
		lockboxInbound.fileInError = Math.floor((Math.random() * 10) + 1);
		lockboxInbound.fileProcessed = Math.floor((Math.random() * 10000) + 1);
		res.send(lockboxInbound);

	}

	


};






exports.lockboxOutboundHome = function(req, res){
	var query = url.parse(req.url,true).query;
	var groupCode 	= query.forGroupCode;
	var siteNumber 	= query.forSiteNumber;
	var lockboxOutbound = {};


	if(groupCode && siteNumber){

		//put code for filter

	}
	else{

		lockboxOutbound.fileInProcess = Math.floor((Math.random() * 1000) + 1);
		lockboxOutbound.fileInError = Math.floor((Math.random() * 10) + 1);
		lockboxOutbound.fileProcessed = Math.floor((Math.random() * 10000) + 1);
		res.send(lockboxOutbound);

	}

	


}



exports.lockboxKeyInHome = function(req, res){
	var query = url.parse(req.url,true).query;
	var groupCode 	= query.forGroupCode;
	var siteNumber 	= query.forSiteNumber;
	var org = query.forOrg;
	var lockboxKeyIn = {};


	if(groupCode && siteNumber && org){

		//put code for filter

	}
	else{

		lockboxKeyIn.assigned = Math.floor((Math.random() * 1000) + 999);
		lockboxKeyIn.inProgress = Math.floor((Math.random() * 1000) + 100);
		lockboxKeyIn.completed = Math.floor((Math.random() * 1000) + 300);
		lockboxKeyIn.submitted = Math.floor((Math.random() * 10000) + 1);
		res.send(lockboxKeyIn);

	}

	


};




exports.lockboxKeyInWorkList = function(req, res){
	var query = url.parse(req.url,true).query;
	var groupCode 	= query.forGroupCode;
	var siteNumber 	= query.forSiteNumber;
	var org = query.forOrg;
	var lockboxKeyInWorkList = {};


	if(groupCode && siteNumber && org){

		//put code for filter

	}
	else{

		lockboxKeyInWorkList.assigned = Math.floor((Math.random() * 1000) + 999);
		lockboxKeyInWorkList.unassigned = Math.floor((Math.random() * 1000) + 499);
		lockboxKeyInWorkList.inProgress = Math.floor((Math.random() * 1000) + 100);
		lockboxKeyInWorkList.completed = Math.floor((Math.random() * 1000) + 300);
		lockboxKeyInWorkList.submitted = Math.floor((Math.random() * 10000) + 1);
		lockboxKeyInWorkList.rejected = Math.floor((Math.random() * 100) + 1);

		res.send(lockboxKeyInWorkList);

	}

	


};








exports.claimHome = function(req, res){
	var query = url.parse(req.url,true).query;
	var groupCode 	= query.forGroupCode;
	var siteNumber 	= query.forSiteNumber;
	var claimHome = {};


	if(groupCode && siteNumber){

		//put code for filter

	}
	else{

		claimHome.fileInProcess = Math.floor((Math.random() * 1000) + 1);
		claimHome.fileInError = Math.floor((Math.random() * 10) + 1);
		claimHome.fileProcessed = Math.floor((Math.random() * 10000) + 1);
		res.send(claimHome);

	}

	


};




exports.lockboxInboundDetail = function(req, res){
	var query = url.parse(req.url,true).query;
	var groupCode 	= query.forGroupCode;
	var siteNumber 	= query.forSiteNumber;
	var lockboxInboundDetailList = {};


	if(groupCode && siteNumber){

		//put code for filter

	}
	else{

		for (var stepCount =1 ; stepCount<= 9 ; stepCount++){
			//console.log(stepCount);
			var step = "STEP" + stepCount;
			lockboxInboundDetailList[step] = {};
			lockboxInboundDetailList[step]["fileInProcess"] = Math.floor((Math.random() * 1000) + 1);
			lockboxInboundDetailList[step]["fileInError"] = Math.floor((Math.random() * 10) + 1);


		}
		
		res.send(lockboxInboundDetailList);

	}

	


};


exports.lockboxOutboundDetail = function(req, res){
	var query = url.parse(req.url,true).query;
	var groupCode 	= query.forGroupCode;
	var siteNumber 	= query.forSiteNumber;
	var lockboxOutboundDetailList = {};


	if(groupCode && siteNumber){

		//put code for filter

	}
	else{

		for (var stepCount =1 ; stepCount<= 7 ; stepCount++){
			//console.log(stepCount);
			var step = "STEP" + stepCount;
			lockboxOutboundDetailList[step] = {};
			lockboxOutboundDetailList[step]["fileInProcess"] = Math.floor((Math.random() * 1000) + 1);
			lockboxOutboundDetailList[step]["fileInError"] = Math.floor((Math.random() * 10) + 1);


		}
		
		res.send(lockboxOutboundDetailList);

	}

	


};




exports.claimDetail = function(req, res){
	var query = url.parse(req.url,true).query;
	var groupCode 	= query.forGroupCode;
	var siteNumber 	= query.forSiteNumber;
	var claimDetail = {};


	if(groupCode && siteNumber){

		//put code for filter

	}
	else{

		for (var stepCount =1 ; stepCount<= 5 ; stepCount++){
			//console.log(stepCount);
			var step = "STEP" + stepCount;
			claimDetail[step] = {};
			claimDetail[step]["fileInProcess"] = Math.floor((Math.random() * 1000) + 1);
			claimDetail[step]["fileInError"] = Math.floor((Math.random() * 10) + 1);


		}
		
		res.send(claimDetail);

	}

	


};


exports.users = function(req, res){

	var name = req.body.name;
	var email = req.body.email;
	var registrationDate = req.body.registrationDate;
	var deviceID = req.body.deviceID;

	if(deviceID === '6ac90d0e-20db-4766-9767-c675bde0ef1f' && name && email && registrationDate){

		res.status(200).send();
	}
	else{

		res.status(403).send();
	}







};




