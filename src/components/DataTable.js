import React from "react";
import DataBody from "./EmployeeCard"

function DataTable(props) {
    // props will be tableData 
    return (
        <div className="container">
            <DataBody result={props.results} />
        </div>
    );
}

export default DataTable;