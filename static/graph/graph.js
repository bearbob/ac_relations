var nMode = 0;
var network;

function changeMode() {
  var p = document.getElementById("mode");
  network.destroy();

  nMode = (nMode+1)%2;
  if(nMode) {
    p.innerHTML = "Mode: Feed";
    buildGraph(17);
  } else {
    p.innerHTML = "Mode: Patreon";
    buildGraph(999);
  }
};

const getFormattedData = function(nEpisode) {
  nEpisode = nEpisode || 999;
  let identifier = 1;
  let mapping = {};
  let nodes = [];
  let edges = [];

  raw_data.nodes.forEach(character => {
    if (character.episode <= nEpisode) {

      character.id = identifier;
      character.label = character.uid;
      if(character.names) {
        character.names.sort( (a,b) => b.episode - a.episode);
        let names = character.names.filter( c => c.episode <= nEpisode);
        if(names.length > 0) {
          character.label = names[0].text;
        }
      }

      //TODO Linebreak and determining which description to use
      let regExLineBreak = /\. /gi;
      character.title = character.description;
      if(typeof character.description != "string") {
        character.description.sort( (a,b) => b.episode - a.episode);
        let descr = character.description.filter( c => c.episode <= nEpisode);
        if(descr.length > 0) {
          character.title = descr[0].text;
        }
      }

      if(typeof character.title == 'string') {
        character.title = character.title.replace(regExLineBreak, '. <br/>');
      }
      if (character.isPlayer) {
        character.shape = 'circle';
      }
      if (character.isFaction) {
        character.shape = 'box';
      }
      nodes.push(character);

      mapping[character.uid] = identifier;
      identifier++;
    }
  });

  raw_data.links.forEach(link => {
    if(link.episode <= nEpisode) {

      let edge = {
        from: mapping[link.source],
        to: mapping[link.target],
        label: link.uid,
        title: link.description,
      };
      if(link.value === 1) {
        edge.dashes = true;
      }

      edges.push(edge);
    }
  });

  return {
    nodes: nodes,
    edges: edges,
  };

};

/**
 * @public
 * Creates the network graph
 * @param {number} nCurrentEpisode The value of the current episode. Used to hide spoilers
 */
const buildGraph = function (nCurrentEpisode) {
  nCurrentEpisode = nCurrentEpisode || 999;
  let dataInput = getFormattedData(nCurrentEpisode);
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
  var options = {
    groups: {
      Tinka: {
        color: {
          background:'#ffd166',
          border:'#cca751',
          highlight: {
            background:'#ffda84',
            border:'#cca751'
          }
        },
      },
      Gods: {
        color: {
          background:'#56CFE1',
          border:'#5390D9',
          highlight: {
            background:'#72EFDD',
            border:'#5390D9'
          }
        },
      }
    }
  };
  network = new vis.Network(container, data, options);
};