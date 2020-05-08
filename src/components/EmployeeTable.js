import React, { Component } from "react";
import API from "../Utils/API";
import Wrapper from "./Wrapper";
import Header from "./Header";
import EmployeeCard from "./EmployeeCard";
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";


class EmployeeTable extends Component {
    state = {
        results: [],
        search: "",
        // filteredEmployees: [],

    };

    // When this component mounts, search the API for employees
    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {

        API.search(20)
            .then(res => {
                console.log("res: ", res)
                this.setState({ results: res.data.results });
                console.log("results: ", this.state.results)
            }).catch(err => console.log(err));
    };

    handleInputChange = event => {
        console.log(event.target.value)
        const value = event.target.value;
        this.setState({
            search: value,
        });
    };

    // // When the form is submitted, search the API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };
    


    render() {
        
        return (
            <Wrapper>
                <Header />
                <SearchBox
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeCard
                
                // name={this.state.result.name}
                results={this.state.results}
                />
                
                {/* <DataTable results={this.state.results} /> */}
            </Wrapper>
        );
    }



}

export default EmployeeTable;