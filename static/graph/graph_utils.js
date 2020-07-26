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

/**
 * @public
 * Returns the stroke color for a given node
 * @param {object} d The node object
 * @return {string}
 */
const getStrokeColor = function(d) {
  let stroke = STROKE.default;
  if(d.isFaction) {
    stroke = COLOR(d.group);
  }
  return stroke;
};

const getFillColor = function(d) {
  let sColor = COLOR(d.group);
  if(d.isFaction) {
    sColor = 'black';
  }
  return sColor;
};

const getHoverFillColor = function(d) {
  let sColor = 'white';
  if(d.isFaction) {
    sColor = COLOR(d.group);
  }
  return sColor;
};

const getHoverStrokeColor = function(d) {
  let sColor = COLOR(d.group);
  if(d.isFaction) {
    sColor = 'black';
  }
  return sColor;
};

/**
 *
 * @param {object} context The current execution context
 * @param {object} element The node element object
 * @param {object} tooltip The element where the tooltip will be displayed
 */
const mouseOverNode = function(context, element, tooltip) {
  d3.select(context)
    .style('stroke', getHoverStrokeColor(element))
    .style('fill', getHoverFillColor(element))
    .style("opacity", 1);
  let name = element.id? element.id : "???";
  let description = element.description? element.description : "???";
  tooltip.html('<b>' + name + '</b><br/> ' + description);
};

const mouseLeaveNode = function(element) {
  d3.select(this)
    .style("stroke", getStrokeColor(element))
    .style('fill', getFillColor(element));
};

const mouseOverLink = function(context, element, tooltip) {
  d3.select(context).style("stroke", "black");

  let name = element.id? element.id : "???";
  name = element.source.id + ' & ' + element.target.id + ': ' + name;
  let description = element.description? element.description : "???";
  tooltip.html('<b>' + name + '</b><br/> ' + description);
};

const mouseLeaveLink = function(element) {
  d3.select(this).style("stroke", 'grey');
};