import React, {Component} from 'react'
import Table from './index';


class Cards extends Component {
    render(){
        return(
            
            <div className="container-fluid d-flex">
               
                <div className="row">
                    <div className="col-8">
                        <Table />
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Cards