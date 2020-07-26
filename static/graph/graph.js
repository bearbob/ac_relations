/**
 * @public
 *
 * @param {string} sFile Path to the JSON file containing the data
 * @param {number} [episodeFilter] If a number is given, only data up to this episode is displayed
 */
var buildGraph = function (sFile, episodeFilter) {
  episodeFilter = episodeFilter || 9999;
  //TODO Implement episode filter

  let svg;
  let simulation;
  let link;
  let group;
  let groupData;
  let color = d3.scaleOrdinal(d3.schemeCategory10);

  const setCanvas = function (contextSelector) {
    svg = d3.select(contextSelector)
      .append('svg')
      .attr('width', canvas.width)
      .attr('height', canvas.height)
      .attr('viewbox', canvas.viewbox.x + ' ' + canvas.viewbox.y + ' ' + canvas.viewbox.width + ' ' + canvas.viewbox.height)
      .call(d3.zoom()
        .on("zoom", function () {
          svg.attr("transform", d3.event.transform)
        })
      )
  };

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

  d3.json(sFile)
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
          .distance(45)
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
        .style("stroke-dasharray", function (d) {
          switch(d.value) {
            case 1: return ("3, 3");
            case 2: return ("4, 1");
          }
          return ("0, 0");
        })
        .attr("stroke-width", function (d) {
          return Math.sqrt(2*d.value);
        })
        .on("mouseover", function(d) {
          mouseOverLink(this, d, d3.select(".tooltip"));
        })

      // building the nodes by circles
      groupData = svg.selectAll()
        .data(graph.nodes);

      group = groupData.enter()
        .append('g')
        .attr('class', 'nodes')
        .attr('transform', 'translate(' + (0) + ',' + (0) + ') rotate(0)');

      let node = group
        .append('circle')
        .attr('r', function (d) {
          let r;
          if (graphLinksCount[d.id]) {
            r = graphLinksCount[d.id] * 2;
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
        .on("mouseover", function(d) {
          mouseOverNode(this, d, d3.select(".tooltip"));
        })
        .on("mouseleave", mouseLeaveNode)
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
};