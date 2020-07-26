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

  // Define the div for the tooltip
  const div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

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

      //filter the links and nodes
      graph.nodes = graph.nodes.filter(node => node.episode <= episodeFilter);
      graph.links = graph.links.filter(link => {
        //the link can be shown if the episode filter is true and both nodes are visible as well
        let src = graph.nodes.find(node => node.id == link.source);
        let trgt = graph.nodes.find(node => node.id == link.target);
        return link.episode <= episodeFilter && src && src.episode <= episodeFilter && trgt && trgt.episode <= episodeFilter;
      });

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
          .distance(50)
        )
        .force('x', d3.forceX())
        .force('y', d3.forceY())
        .force('charge', d3.forceManyBody()
          .strength(-300)
        )
        .force('center', d3.forceCenter(canvas.width / 2, canvas.height / 2));

      // building the links
      link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter()
        .append("line")
        .attr('stroke', 'grey')
        .style("stroke-dasharray", function (d) {
          switch(d.value) {
            case 1: return ("3, 3");
            case 2: return ("4, 1");
          }
          return ("0, 0");
        })
        .attr("stroke-width", function (d) {
          return 6;
        })
        .on("mouseover", function(d) {
          mouseOverLink(this, d, d3.select(".hovertext"));
        })
        .on("mouseleave", function(d) {
          mouseLeaveLink(this, d, d3.select(".hovertext"));
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
          //make player and faction nodes slightly larger
          if(d.isPlayer) {
            return 11;
          }
          if(d.isFaction) {
            return 10;
          }
          return 7;
        })
        .attr('stroke', getStrokeColor)
        .attr('stroke-width', function(d) {
          if(d.isFaction) {
            return 5;
          }
          return 2;
        })
        .attr('fill', getFillColor)
        .on("mouseover", function(d) {
          mouseOverNode(this, d, d3.select(".hovertext"));
        })
        .on("mouseleave", function(d) {
          mouseLeaveNode(this, d, d3.select(".hovertext"));
        })
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
        );

      // building text attributes
      group.append('text')
        .attr('transform', 'translate(11, 0) rotate(0)')
        .text(function (d, i) {
          let name = d.id;
          if(d.isFaction) {
            name = '['+name+']';
          }
          return name;
        })
        .attr('font-weight', function (d, i) {
          if(d.isFaction) {
            return 'bold';
          }
          return 'normal';
        })
        //add a white outline to the text
        .clone(true).lower()
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 3);

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