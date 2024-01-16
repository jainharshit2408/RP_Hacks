function fetchLive(callback) {
    fetch('https://raw.githubusercontent.com/picopalette/phishing-detection-plugin/master/static/classifier.json', { 
    method: 'GET'
    })
    .then(function(response) { 
      if (!response.ok) { throw response }
      return response.json(); 
    })
    .then(function(data) {
      chrome.storage.local.set({cache: data, cacheTime: Date.now()}, function() {
        callback(data);
      });
    });
  }
function fetchCLF(callback) {
    chrome.storage.local.get(['cache', 'cacheTime'], function(items) {
        if (items.cache && items.cacheTime) {
            return callback(items.cache);
        }
        fetchLive(callback);
    });
  }

export {fetchCLF, fetchLive}