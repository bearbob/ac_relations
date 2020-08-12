const canvas = {
  width: window.innerWidth - 100,
  height: window.innerHeight - 50,
  viewbox: {
    x: 0,
    y: 0,
    width: window.innerWidth - 100,
    height: window.innerHeight - 50
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
    sColor = 'white';
  }
  return sColor;
};

const showTooltip = function(tooltip, name, description) {
  tooltip.html('<b>' + name + '</b><br/> ' + description);
  tooltip.style("left", (d3.event.pageX + 10) + "px")
          .style("top", (d3.event.pageY + 20) + "px")
          .style("opacity", "1");
}

const resetTooltip = function(tooltip) {
  tooltip.html('Berühre einen Knoten oder eine Kante, um mehr Informationen zu sehen.');
  tooltip.style("opacity", "0");
}

/**
 * @param {object} node The node instant
 * @param {array} node.name
 * @param {string} node.id
 * @param {number} episodeFilter
 * @return {string}
 */
const getName = function(node, episodeFilter) {
  let name = node.id;
  if(node.names && node.names.length > 0) {
    let sortedNames = node.names.sort(function(a, b){ return a.episode - b.episode });
    if(episodeFilter) {
      //remove all names that are above the filter
      sortedNames = sortedNames.filter(name => name.episode <= episodeFilter);
    }
    name = sortedNames[0].name;
  }
  if (node.isFaction) {
    name = '['+name+']';
  }
  return name;
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
  let name = element.id ? getName(element) : "???";
  let description = element.description ? element.description : "???";
  showTooltip(tooltip, name, description);
};

const mouseLeaveNode = function(context, element, tooltip) {
  d3.select(context)
    .style("stroke", getStrokeColor(element))
    .style('fill', getFillColor(element));
  resetTooltip(tooltip);
};

const mouseOverLink = function(context, element, tooltip) {
  d3.select(context).style("stroke", "white");

  let name = element.id? element.id : "???";
  name = element.source.id + ' & ' + element.target.id + ': ' + name;
  let description = element.description? element.description : "???";
  showTooltip(tooltip, name, description);
};

const mouseLeaveLink = function(context, element, tooltip) {
  d3.select(context).style("stroke", 'grey');
  resetTooltip(tooltip);
};