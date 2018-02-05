#!/usr/bin/env node

module.exports = function (context) {
    var JSSDKVersion = "v2";
    var downloadFile = require('./downloadFile.js'),
        exec = require('./exec/exec.js'),
        Q = context.requireCordovaModule('q'),
        deferral = new Q.defer();
    console.log('Downloading OpenTok JS SDK');
    var frameworkDir = context.opts.plugin.dir + '/src/browser';
    downloadFile('https://static.opentok.com/' + JSSDKVersion + '/js/opentok.js',
        frameworkDir + '/opentok.js', function (err) {
            if (!err) {
                console.log('downloaded');
                deferral.resolve();
            }
        });
    return deferral.promise;
};
