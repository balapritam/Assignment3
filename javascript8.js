// Get references to the button and paragraph elements
const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Change the text content of the paragraph element
  paragraph.textContent = 'Button Clicked!';
});
