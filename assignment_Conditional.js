function launchBrowser(browserName)
{
    if (browserName === "Chrome")
        {
            console.log("Launching Chrome Browser");
        }
    else if (browserName === "Firefox")
        {
            console.log("Launching Firefox Browser");
        }
    else if (browserName === "Edge")
        {
            console.log("Launching Edge Browser");
        }   
    else
        {
            console.log("Browser not supported");
        }
   }

function runTests(testType)
{
    switch (testType)
    {   
        case "Smoke":
            console.log("Running Smoke Tests");
            break;

        case "Sanity":
            console.log("Running Sanity Tests");
            break;

        case "Regression":
            console.log("Running Regression Tests");
            break;


        default:
            console.log("Running Smoke Tests");
            break;

    }
}

launchBrowser("Chrome");
runTests("Sanity");
launchBrowser("Firefox");
runTests("Regression");
launchBrowser("Edge");
runTests();
launchBrowser("Safari");
runTests("Sanity");