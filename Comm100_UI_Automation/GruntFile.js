module.exports = function (grunt) {

    grunt.initConfig({
        clean: ["reports", "screenshots", "allure-results", "*.tmp", "*.log", "resultJSON", "emailableReport.html", "result.xml", "allure-report"],
        localstack: {
            options: {
                key: "NzK5eCsCepUsPt6nxk1p",
                hosts: [{
                    name: "localhost",
                    port: 8082,
                    sslFlag: 0
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-localstack");
};