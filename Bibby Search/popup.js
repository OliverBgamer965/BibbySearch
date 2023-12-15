document.addEventListener('DOMContentLoaded', function() {
    // Attach click event to the "Change Background" button
    document.getElementById('change-bg-button').addEventListener('click', function() {
      // Prompt user for color input
      var newColor = prompt("Enter new background color (e.g., white, #ffffff):");
      
      // Set the background color
      if (newColor !== null) {
        chrome.storage.sync.set({ backgroundColor: newColor });
        document.body.style.backgroundColor = newColor;
      }
    });
  
    // Retrieve and set the background color from storage
    chrome.storage.sync.get(['backgroundColor'], function(result) {
      if (result.backgroundColor) {
        document.body.style.backgroundColor = result.backgroundColor;
      }
    });
  });
  