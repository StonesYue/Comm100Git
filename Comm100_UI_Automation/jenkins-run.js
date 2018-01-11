const runAll = require("npm-run-all");
const jenkinsArguments = require("minimist")(process.argv.slice(2));
const parallelConfig = {
    parallel: true,
    continueOnError: true,
    printName: true,
    stdout: process.stdout,
    stderr: process.stdout
};

let testTypes = ["stubbed"];
if (jenkinsArguments.type !== undefined) {
    console.log(jenkinsArguments.type);
    testTypes = jenkinsArguments.type.replace(/"/g, "").split(",");
}
console.log(testTypes);
runAll("clean")
    .then(() => {
        console.log("cleaned directory");
        return runAll(testTypes, parallelConfig);
    })
    .catch(err => {
        console.log("test job failed with " + err.message);
    })
    .then(()=> {
        console.log("Ran all test cases");
        return runAll(["report", "mongo-report"], parallelConfig);
    })
    .catch(err => {
        console.log("Report Generation Failed:" + err.message);
    });