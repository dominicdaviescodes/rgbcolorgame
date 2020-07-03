// assign 6 colors always the same (randomize later)

var colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)',
];

// loop through squares

var squares = document.querySelectorAll('.square');
// the goal color
var pickedColor = colors[3];

// color displayed in h1 tag
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}
