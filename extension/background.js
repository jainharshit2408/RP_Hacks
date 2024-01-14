chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    alert("request.prediction");
    if (request.prediction === true) {
      alert("Warning: Phishing detected!! Phishing sites pretend to be other websites to trick you.");
    } else if (request.prediction === -1) {
      alert("No phishing detected");
    }
    sendResponse({ message: "Response from background script" });
  }
);
