document.getElementById("getBrowserHistory", retrieveHistory);

function retrieveHistory() {
    chrome.history.search({text: ""}, function(results) {
        console.log(results);
    });
}

