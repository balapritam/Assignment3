//Window
function openWindow(url, width, height) {
    const features = `width=${width},height=${height}`;
    window.open(url, '_blank', features);
  }
  
  
  openWindow('https://www.example.com', 800, 600);
  