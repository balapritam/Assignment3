function sendPostRequest() {
    const xhr = new XMLHttpRequest();
    const url = "https://api.example.com/submit";
    const data = {
      name: "John Doe",
      email: "johndoe@example.com"
    };
    const jsonData = JSON.stringify(data);
  
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
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
  
    xhr.send(jsonData);
  }
  