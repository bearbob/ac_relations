
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const COLORVALS = [
  '#264653',
  '#2a9d8f',
  '#e9c46a',
  '#f4a261',
  '#e76f51',
  '#e63946',
  '#ef476f',
  '#ffd166',
  '#06d6a0',
  '#118ab2',
  '#073b4c',
  '#7b241c',
  '#9b59b6',
  '#2874a6',
  '#196f3d',
  '#f1c40f',
  '#d35400',
];
for(let i=0; i<201; i++) {
  COLORVALS.push(getRandomColor());
}

const COLOR = function(index) {
  return COLORVALS[index];
};
const STROKE = {
  Faction: '#696996',
  Player: 'black',
  default: 'black',
  hoverLink: 'black',
  hoverNodeFill: 'black',
  hoverFactionStroke: 'black',
};