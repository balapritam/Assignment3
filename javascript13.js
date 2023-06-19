//DOM Query Selector
const highlightedParagraphs = document.querySelectorAll(".mark");

highlightedParagraphs.forEach(function(paragraph) {
  paragraph.style.color = "red";
});

