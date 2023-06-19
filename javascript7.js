function handleClick(event) {
    var x = event.clientX;
    var y = event.clientY;
    alert("Clicked at coordinates (x, y): " + x + ", " + y);
  }
  
  // key press event
  function handleKeyPress(event) {
    var keyCode = event.keyCode || event.which;
    alert("Key pressed. Key code: " + keyCode);
  }
  
  // mouse moves over it
  function changeImageSource() {
    var image = document.getElementById("myImage");
    image.src = "Chicken-Curry.jpg"; 
  }

  // Attach event listeners
  document.addEventListener("click", handleClick);
  document.addEventListener("keypress", handleKeyPress);