
        // Get the body element
var body = document.body;
console.log(Event);
// Create a function that draws a circle at the given coordinates
function drawCircle(x, y) {
  // Create a div element
  var circle = document.createElement("div");

  // Set the style of the div to make it look like a circle
  circle.style.position = "absolute";
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderRadius = "50%";
  circle.style.backgroundColor = "red";

  // Append the div to the body
  body.appendChild(circle);
}

// Add an event listener to the body that runs the drawCircle function when clicked
body.addEventListener("click", function(event) {
  // Get the mouse coordinates relative to the document
  var x = event.x;
  var y = event.y;

  // Call the drawCircle function with the mouse coordinates
  drawCircle(x, y);
});
