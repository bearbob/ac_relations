
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const COLORVALS = [];
for(let i=0; i<201; i++) {
  COLORVALS.push(getRandomColor());
}

const COLOR = function(index) {
  return COLORVALS[index];
};
const STROKE = {
  Faction: '#696996',
  Player: 'white',
  default: 'white',
};