import React, { Component, useState, useEffect } from 'react'
import { useTable, useSortBy } from 'react-table'
import Card from './Card.css'



class Table extends Component {

  state ={
      search: '', 
      employees: [],
      filteredArray: []
    }

  
  //state = { search: '', employees: [] }
  

  

  handleInputChange = event => {
   this.setState({ searchTerm: event.target.value})
  }
 
  
  // filteredSearch = (data) =>{
  //   if(this.state.search == null){
  //     return data
  //   } else{    
  //   return data.filter(data => data.results.name.first.toLowerCase().indexOf(q))
  //   }
  //    }
  
  

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=15&nat=gb`)
      .then(results => { return results.json() })
      .then(data => {
        function compare(a, b) {
          //console.log('a=', a);
          //console.log('b=', b);
          const nameA = a.name.first;
          
          //console.log("a.name=", a.name);
          
          
          const nameB = b.name.first;
          
          let comparison = 0;
          if (nameA > nameB) {
            comparison = 1;
          } else if (nameA < nameB) {
            comparison = -1
          }
          return comparison
          
        }


//let filteredEmployees = data.results.filter(compare)
      
// const searchEmployees = data.results.filter(function(em){
//   return em.name.first.toLowerCase().indexOf()> -1;
  
// })
//console.log('Searched:', searchEmployees)
//let filteredArray = data.results.filter()

       let sortedEmployees = data.results.sort(compare)
        let employees = sortedEmployees.map((person) => {
          //console.log(data)
          
          
          return (

            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr key={person.id.value}>
                  <td>{person.id.value.toLowerCase()}</td>
                  <td><img className="image" src={person.picture.large} /></td>
                  <td >{person.name.first} {person.name.last}</td>
                  <td>{person.phone}</td>
                  <td>{person.email}</td>
                  <td>{person.gender}</td>
                  <td>{person.location.city}</td>
                </tr>
              </tbody>
            </table>

          )
        })
        
        

        this.setState({ employees: employees })
 
      })
  }



  render() {
    return (
      <div className="App">
      <input className="search-box" type="text" placeholder="Filter your search" 
      onChange={this.handleInputChange} />
      <div className="table-wrapper">
        {this.state.employees}
        </div>

      </div>
    )
  }
}
export default Table;
