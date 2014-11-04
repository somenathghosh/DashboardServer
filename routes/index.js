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
	var lockboxKeyIn = {};


	if(groupCode && siteNumber){

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

	


}

