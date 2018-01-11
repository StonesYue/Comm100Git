/*eslint-disable no-alert, no-console */
var fs = require("fs");
var allure = require("nightwatch-allure-adapter");
var junit = require("./node_modules/nightwatch/lib/runner/reporters/junit");
var reportJsonPath = "./resultJSON";

var getResultsForFile = function (results, options) {
    var argv = require("minimist")(process.argv.slice(2));
    var packageName = argv.packageGroup || false;
    var resultForWrite = {
        "results": results,
        "locale": options.globals.locale,
        "group": packageName + results.environment
    };
    return JSON.stringify(resultForWrite);
};

var writeResults = function (results) {
    fs.writeFile(reportJsonPath + "/" + new Date().getTime() + ".json", results, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
};

module.exports = {
    write: function (results, options, done) {
        results.environment = options.globals.environment;
        var resultsForWrite = getResultsForFile(results, options);
        fs.exists(reportJsonPath, function (exists) {
            if (!exists) {
                fs.mkdir(reportJsonPath, function () {
                    writeResults(resultsForWrite);
                });
            } else {
                writeResults(resultsForWrite);
            }
        });
        allure.write(results, function () {
            console.log("Generated allure reports");
            junit.write(results, options, done);
        }, __dirname + "/tests/");

    }
};