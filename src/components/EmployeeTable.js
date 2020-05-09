import React, { Component } from "react";
import API from "../Utils/API";
import Wrapper from "./Wrapper";
import Header from "./Header";
import EmployeeCard from "./EmployeeCard";
import SearchBox from "./SearchBox";
// import DataTable from "./DataTable";

class EmployeeTable extends Component {
    state = {
        results: [],
        search: "",
        filteredEmployees: [],
    };

    // When this component mounts, search the API for employees
    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {

        API.search(20)
            .then(res => {
                // console.log("res: ", res)
                this.setState({ results: res.data.results });
                console.log("results: ", this.state.results)
            }).catch(err => console.log(err));
    };

    handleInputChange = event => {
        // console.log(event.target.value)
        const value = event.target.value;
        this.setState({
            search: value,
            filteredEmployees: []
            
        }); this.filteredEmployees()
    };

    // handleSearchChange = (event) => {
    //     this.setState({ search: event.target.value });
    //   };
    
    // // // When the form is submitted, search the API for the value of `this.state.search`
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchEmployees(this.state.search);
    // };

    // filteredEmployees() {
    //     const search = this.state.search.toLowerCase();
    //     return this.state.results.filter((results) => {
    //       return results.name.toLowerCase().includes(search);
    //     });
    //   }

    filteredEmployees() {
        // this.setState({filteredEmployees: []})
        this.state.filteredEmployees = []
        console.log(this.state.results)
        for(let i = 0; i < this.state.results.length; i++) {
            if(this.state.results[i].name.first.toLowerCase().search(this.state.search.toLowerCase()) !== -1){
                this.state.filteredEmployees.push(this.state.results[i])
                this.setState({filteredEmployees: this.state.filteredEmployees})
               console.log(this.state.filteredEmployees)
            }}
    }

    render() {
        
        return (
            <Wrapper>
                <Header />
                <div class="container">
                <SearchBox
                    search={this.state.search}
                    filteredEmployees={this.filteredEmployees}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeCard
                
                results={this.state.results}
                search={this.state.search}
                filteredEmployees={this.state.filteredEmployees}
                />
                </div>
                
                {/* <DataTable results={this.state.results} /> */}
            </Wrapper>
        );
    }



}

export default EmployeeTable;