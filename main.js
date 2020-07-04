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

var messageDisplay = document.querySelector('#message');

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener('click', function () {
    // get color of picked square
    var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct';
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}
