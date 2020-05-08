import React from "react";

const tableStyle = {
    paddingRight: "200px",
}

const tableRowStyle = {
    padding: "20px 0 20px 0"
}

function EmployeeCard(props) {
    console.log(props)
    let newDateOfBirth = (dob) => {
        let date = dob;
        let replaced = date.split('T');
        let newDate = replaced[0];
        return newDate;
    }

    return (
        <table>
            <thead>
                <tr >
                    <th style={tableStyle}>Image</th>
                    <th style={tableStyle}>Name</th>
                    <th style={tableStyle}>Phone</th>
                    <th style={tableStyle}>Email</th>
                    <th style={tableStyle}>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(result => (
                    // <tr>{result}</tr>
                    <tr key={result.login.id}>
                        <td><img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} /></td>
                        <td style={tableRowStyle}>{result.name.first} {result.name.last}</td>
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