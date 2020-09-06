//some constants for the graph
var svg;

/**
 * @public
 * Creates the network graph
 */
var buildGraph = function () {
  let dataInput = getFormattedData();
  // create an array with nodes
  var nodes = new vis.DataSet(dataInput.nodes);

  // create an array with edges
  var edges = new vis.DataSet(dataInput.edges);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
};