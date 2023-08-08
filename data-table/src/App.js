import './App.css';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";


function App() {
  const tableData = {
    columns,
    data
  };
  
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
          />
          </DataTableExtensions>
          
    
    </div>
  );
}

export default App;
