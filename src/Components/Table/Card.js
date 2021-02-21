import React, {Component} from 'react'
import Table from './index';
import Card from "./Card/css";


class Cards extends Component {
    render(){
        return(
            
            <div className="container-fluid">
               
                <div className="row">
                    <div className="col-12">
                        <Table />
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Cards