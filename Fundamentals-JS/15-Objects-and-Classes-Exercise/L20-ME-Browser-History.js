function solve(inputObject, inputArray) {

    inputArray.forEach(line => {
        let [action, name] = line.split(' ');
        if (action === 'Clear') {
            inputObject["Open Tabs"] = [];
            inputObject["Recently Closed"] = [],
            inputObject["Browser Logs"] = [];
        } else if (action === 'Close') {
            if (inputObject["Open Tabs"].includes(`${name}`)) {
                let index = inputObject["Open Tabs"].indexOf(name);
                inputObject["Open Tabs"].splice(index, 1); 
                inputObject["Recently Closed"].push(name);
                inputObject["Browser Logs"].push(`${action} ${name}`);
            }
        } else if (action === 'Open') {
            inputObject["Open Tabs"].push(name);
            inputObject["Browser Logs"].push(`${action} ${name}`);
        }
    });

    console.log(inputObject["Browser Name"]);
    console.log(`Open Tabs: ${inputObject["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${inputObject["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${inputObject["Browser Logs"].join(', ')}`);

}

solve(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);

solve(
    {
        "Browser Name":"Mozilla Firefox",
        "Open Tabs":["YouTube"],
        "Recently Closed":["Gmail", "Dropbox"],
        "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
