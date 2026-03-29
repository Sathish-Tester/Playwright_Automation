var testEnvironment;
(function (testEnvironment) {
    testEnvironment["local"] = "Local";
    testEnvironment["development"] = "Development";
    testEnvironment["Staging"] = "Staging";
    testEnvironment["production"] = "PROD";
})(testEnvironment || (testEnvironment = {}));
function runTests(env) {
    console.log("Test is running on ".concat(env, " environment"));
}
runTests(testEnvironment.development);
