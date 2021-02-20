import React, {Component} from 'react'
import Table from './index';

class Cards extends Component {
    render(){
        return(
            
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Table />
                    </div>
                    <div className="col-md-4">
                        <Table />
                    </div>
                    <div className="col-md-4">
                        <Table />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards