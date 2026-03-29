enum testEnvironment
{
    local = "Local",
    development = "Development",
    Staging = "Staging",
    production = "PROD"

}

function runTests (env : testEnvironment) : void
{
    console.log (`Test is running on ${env} environment`);
}

runTests(testEnvironment.development);