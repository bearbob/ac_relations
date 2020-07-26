const canvas = {
  width: 1100,
  height: 600,
  viewbox: {
    x: 0,
    y: 0,
    width: 800,
    height: 500
  },
  padding: {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
  }
};
const scale = {
  xAxis: {
    domain: {
      from: 0,
      to: 100
    },
    range: {
      start: canvas.padding.left,
      end: canvas.width - canvas.padding.right
    }
  },
  yAxis: {
    domain: {
      from: 5,
      to: 0
    },
    range: {
      start: canvas.padding.top,
      end: canvas.height - canvas.padding.bottom
    }
  }
};

const mouseOverNode = function(context, element, tooltip) {
  d3.select(context).style("stroke", "black").style("opacity", 1);
  let name = element.id? element.id : "???";
  let description = element.description? element.description : "???";
  tooltip.html('<b>' + name + '</b><br/> ' + description);
};

const mouseLeaveNode = function(element) {
  d3.select(this)
    .style("stroke", "none")
    .style("opacity", 0.8);
};

const mouseOverLink = function(context, element, tooltip) {
  let name = element.id? element.id : "???";
  name = element.source.id + ' & ' + element.target.id + ': ' + name;
  let description = element.description? element.description : "???";
  tooltip.html('<b>' + name + '</b><br/> ' + description);
};
