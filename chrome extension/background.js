chrome.runtime.onInstalled.addListener(() => {
    chrome.history.search({text: ""}, function(results) {
        fetch('http://localhost:8000/browser-history', {
            method: 'POST',
            body: results,
          }, 
          {mode: 'cors'});
        console.log(results);
    });
});