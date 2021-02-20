import React, { Component } from 'react'
import Card from './Card.css'
class Table extends Component {

  state = {
    employees: []
}

componentDidMount() {
  fetch(`https://randomuser.me/api/?results=55&nat=gb`)
  .then(results => { return results.json()})
  .then(data => { let employees = data.results.map((person) => {

      return (
           <div className="card text-center">
             <div className="upper-container">
               <div className="image-container">
               <img className="image"src={person.picture.large}/>
               </div>
             </div>
             
             <div className="card-body text-dark">
               <h3>{person.name.first} {person.name.last}</h3>
               <h5 className="gender">{person.gender}</h5>
               <p>{person.email}</p>
               <h4>{person.location.city}</h4>
             </div>
             
           </div>
          
        )
    })

    
  this.setState({ employees: employees });
  
})
}


render() {
return (
<div className="App">
  
       {this.state.employees}     

</div>
)
}
}
export default Table;
