import React from "react";

function EmployeeCard(props) {
    console.log(props)
    let newDateOfBirth = (dob) => {
        let date = dob;
        let replaced = date.split('T');
        let newDate = replaced[0];
        return newDate;
    }

    let data;
    if (props.search === "") {
        data = props.results;
    } else {
        data = props.filteredEmployees
    }
    // const ASCENDING = "ascending";
    // const DESCENDING = "descending";

    // const sortEmployees = (order, field) => {
    //     const sortedChars = this.state.filteredEmployees.slice(0).sort((a, b) => {
    //         if (order === ASCENDING) {
    //             return (a[field] || "").localeCompare(b[field] || "");
    //         }
    //         return (b[field] || "").localeCompare(a[field] || "");
    //     });
    //     this.state.filteredEmployees(sortedChars);
    // };

    return (
        <table className="table table-striped bg-muted">
            <thead>
                <tr >
                    <th>Image</th>

                    <th>Name{""}
                    {/* <span onClick={() => sortEmployees(ASCENDING, "name")}>🔼</span>
                    <span onClick={() => sortEmployees(DESCENDING, "name")}>🔽</span> */}
                    </th>

                    <th>Phone{""}
                    {/* <span onClick={() => sortEmployees(ASCENDING, "name")}>🔼</span>
                    <span onClick={() => sortEmployees(DESCENDING, "name")}>🔽</span> */}
                    </th>
                    <th>Email
                    {/* <span onClick={() => sortEmployees(ASCENDING, "name")}>🔼</span>
                    <span onClick={() => sortEmployees(DESCENDING, "name")}>🔽</span> */}
                    </th>
                    <th>DOB
                    {/* <span onClick={() => sortEmployees(ASCENDING, "name")}>🔼</span>
                    <span onClick={() => sortEmployees(DESCENDING, "name")}>🔽</span> */}
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map(result => (

                    <tr key={result.login.id}>
                        <td><img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} /></td>
                        <td >{result.name.first} {result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email} </td>
                        <td>{newDateOfBirth(result.dob.date)}</td>
                    </tr>
                ))}
            </tbody >
            {/* <DataTable tableData={props.results}/> */}
        </table>

    )
}

export default EmployeeCard;