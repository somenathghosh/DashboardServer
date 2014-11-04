var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cors = require('cors');

var router = require('./routes/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', router.indexPage);
app.get('/api/v1/dashboard/lockbox/inbound/home', cors(), router.lockboxInboundHome);
app.get('/api/v1/dashboard/lockbox/outbound/home', cors(), router.lockboxOutboundHome);
app.get('/api/v1/dashboard/lockbox/keyin/home', router.lockboxKeyInHome);



app.get('/api/v1/dashboard/claim/home', router.claimHome);

/*
app.get('api/v1/dashboard/lockbox/inbound/detail', router.lockboxInboundDetail);
app.get('api/v1/dashboard/lockbox/outbound/detail', router.lockboxOutboundDetail);
app.get('api/v1/dashboard/claim/detail', router.claimDetail);
app.get('api/v1/dashboard/lockbox/keyin/detail/worklist', router.lockboxKeyInWorkList);
app.get('api/v1/dashboard/lockbox/keyin/detail/volume', router.lockboxKeyInVolume);
app.get('api/v1/dashboard/lockbox/keyin/detail/batchTAT', router.lockboxKeyInBatchTAT);
app.get('api/v1/dashboard/lockbox/keyin/detail/MPI', router.lockboxKeyInMPI);



app.get('api/v1/dashboard/reports/TAT', router.reportTAT);
app.get('api/v1/dashboard/reports/TAT/missed/sites', router.reportTATMissedSites);
app.get('api/v1/dashboard/claim/MPI/decline/clients', router.reportClaimClients);
app.get('api/v1/dashboard/claim/volume', router.reportClaimVolume);
app.get('api/v1/dashboard/claim/MPI/loadTime', router.reportClaimMPILoadTime);*/










// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});


