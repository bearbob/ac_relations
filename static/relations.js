(function () {
  'use strict';

  //global vars
  let svg;
  let simulation;
  let link;
  let node;
  let group;
  let groupData;
  let nest;
  let color = d3.scaleOrdinal(d3.schemeCategory10);

  const canvas = {
    width: 1200,
    height: 800,
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

  const setCanvas = function (contextSelector) {
    svg = d3.select(contextSelector)
      .append('svg')
      .attr('width', canvas.width)
      .attr('height', canvas.height)
      .attr('viewbox', canvas.viewbox.x + ' ' + canvas.viewbox.y + ' ' + canvas.viewbox.width + ' ' + canvas.viewbox.height)
  };

  var Tooltip = d3.select("#diagram")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px");

  // Three functions that change the tooltip when user hover / move / leave a node
  function mouseover(d) {
    Tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }
  function mousemove(d) {
    Tooltip
      .html("The exact value of<br>this cell is: " + d.value)
      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  function mouseleave(d) {
    Tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.8)
  }

  function dragstarted(d) {
    if (!d3.event.active) {
      simulation.alphaTarget(0.3).restart();
    }
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) {
      simulation.alphaTarget(0);
    }
    d.fx = null;
    d.fy = null;
  }

  function ticked() {
    if (link) {
      link
        .attr('x1', function (d) {
          return d.source.x;
        })
        .attr('y1', function (d) {
          return d.source.y;
        })
        .attr('x2', function (d) {
          return d.target.x;
        })
        .attr('y2', function (d) {
          return d.target.y;
        });
    }
    if (group) {
      group.attr('transform', function (d, i) {
        return 'translate(' + d.x + ',' + d.y + ') rotate(0) scale(1)'
      });
    }
  }
  // - - - - - - - - - -
  // control
  // - - - - - - - - - -
  setCanvas('#diagram');

  d3.json('/data/characters.json')
    .then(function (graph) {

      // count links per name and save as object
      let graphLinksCount = d3.nest()
        .key(function (d) {
          return d.source;
        })
        .rollup(function (v) {
          return v.length;
        })
        .object(graph.links);

      simulation = d3.forceSimulation()
        .force('link', d3.forceLink()
          .id(function (d) {
            return d.id;
          })
          .distance(100)
        )
        .force('charge', d3.forceManyBody()
          .strength(-100)
        )
        .force('center', d3.forceCenter(canvas.width / 2, canvas.height / 2));

      // building the links
      link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter()
        .append("line")
        .attr("stroke-width", function (d) {
          return Math.sqrt(d.value);
        });

      // building the nodes by circles
      groupData = svg.selectAll()
        .data(graph.nodes);

      group = groupData.enter()
        .append('g')
        .attr('class', 'nodes')
        .attr('transform', 'translate(' + (0) + ',' + (0) + ') rotate(0)');

      node = group
        .append('circle')
        .attr('r', function (d) {
          let r;
          if (graphLinksCount[d.id]) {
            r = graphLinksCount[d.id] * 3;
          } else {
            r = 0;
          }
          if (r < 5) r = 5;
          return r;
        })
        .attr('stroke', 'white')
        .attr('stroke-width', '2')
        .attr('fill', function (d) {
          return color(d.group);
        })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
        );

      // building title and text attributes
      group.append('title')
        .text(function (d) {
          return d.id;
        });

      group.append('text')
        .attr('transform', 'translate(5, 0) rotate(0)')
        .text(function (d, i) {
          return d.id;
        });

      // realtime engine
      simulation
        .nodes(graph.nodes)
        .on('tick', ticked);

      // the force is strong with you
      simulation.force('link')
        .links(graph.links);
    });
  // - - - - - - - - - -
})();