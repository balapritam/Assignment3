function sendGetRequest() {
    const xhr = new XMLHttpRequest();
    const url = "https://api.example.com/data";
  
    xhr.open("GET", url, true);
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
      } else {
        console.error("Request failed. Status: " + xhr.status);
      }
    };
  
    xhr.onerror = function() {
      console.error("Request failed. Network error.");
    };
  
    xhr.send();
  }
  