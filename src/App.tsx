import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import DataEditor, { DataEditorProps, DataEditorRef, GridCell, GridCellKind, GridColumn, Item } from '@glideapps/glide-data-grid'
import React from 'react';


const columns: GridColumn[] = [
  { title: "Column 0", width: 100 },
  { title: "Column 1", width: 100 },
  { title: "Column 2", width: 100 },
];

function getData([col, row]: Item): GridCell {
  const value = Math.random().toString();
  return {
      kind: GridCellKind.Text,
      data: value,
      displayData: value,
      allowOverlay: false,
  };
}

function App() {

  const [useMarkers, setUseMarkers] = React.useState(false);
  const dataEditorRef = React.useRef<DataEditorRef>(null);

  const updateCell = (cell: Item) => {
    const dataEditor = dataEditorRef.current!;
    dataEditor.updateCells([{cell}]);
  }

  return (
    <div className="App">
      <DataEditor ref={dataEditorRef} getCellContent={getData} columns={columns} rows={3} rowMarkers={useMarkers ? "number" : "none"} rowMarkerStartIndex={0}/>
      <label>Toggle row markers: <input type="checkbox" checked={useMarkers} onChange={(e) => setUseMarkers(e.target.checked)}/></label>
      <button onClick={() => updateCell([1, 1])}>Update cell [1, 1]</button>
    </div>
  )
}

export default App
