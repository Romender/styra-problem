import React from 'react';
import logo from './logo.svg';
import './App.css';
import {generateNodes} from './generate_nodes.js'
import Table from './table';

function App() {
  const nNodes = 2000
  const seed = 2357
  const nodes = generateNodes(nNodes, seed)
  const matrix = createMatrix(nodes, nNodes);

  return (
    <div>
      <Table nodes = {matrix} length = {nNodes}/>
    </div>
  );
}

var createMatrix = (nodes, nodeLen) => {
  var matrix = [];
  for(var i =0 ; i < nodeLen; i++) {
    var row =[];
    var nodeRow = nodes['node'+i];
    for(var j=0; j < nodeLen; j++) {
      var val = nodeRow['node'+j] === undefined ? "" : nodeRow['node'+j];
      row.push(val);
    }
    matrix.push(row);
  }
  return matrix;
}

export default App;
