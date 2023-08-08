import React, { useState} from "react";
import './App.css';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";
import "./App.css";

function App() {
  const tableData = {
    columns,
    data
  };
  /*
  const columns = [
    {
      name:"Name",
      selector: row => row.Name
    },
    {
      name:"Position",
      selector: row => row.Position
    },
    {
      name:"Office",
      selector: row => row.Office
    }
  ];
  const data =  [
    {
      
      "Name": "airi satou",
      "Position": "accountant",
      "Office": "tokyo"
    },
    {
      
      "Name": "angelica ramos",
      "Position": "chief executive officer (ceo)",
      "Office": "london"
    },
    {
      
      "Name": "ashton jordan",
      "Position": "junior technical author",
      "Office": "san francisco"
    },
    {
      
      "Name": "bradley greer",
      "Position": "software engineer",
      "Office": "london"
    },
    {
      
      "Name": "brenden wagner",
      "Position": "software engineer",
      "Office": "san francisco"
    },
    {
      
      "Name": "brielle williamson",
      "Position": "integration specialist",
      "Office": "new york"
    },
    {
      
      "Name": "bruno nash",
      "Position": "software engineer",
      "Office": "london"
    },
    {
      
      "Name": "caesar vance",
      "Position": "pre-sales support",
      "Office": "new york"
    },
    {
      
      "Name": "cara stevens",
      "Position": "sales assistant",
      "Office": "new york"
    },
    {
      
      "Name": "cedric kelly",
      "Position": "senior javascript developer",
      "Office": "edinburgh"
    },
    {
      
      "Name": "charde marshall",
      "Position": "regional director",
      "Office": "san francisco"
    },
    {
      
      "Name": "france joseph",
      "Position": "regional director",
      "Office": "san francisco"
    }
  ]
*/
  
  return (
    <div className="App">
        <h1>React Data Table</h1>
          
          <DataTableExtensions {...tableData}>
          <DataTable
            columns={columns}
            data={data}
            pagination
            exportHeaders
            responsive
            highlightOnHover
          >
          </DataTable>
          </DataTableExtensions>
          
    
    </div>
  );
}

export default App;
