import React from 'react';
// import PropTypes from 'proptypes';
// import 'Expense.css';

class Expense extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
   
    render(){
        
        return(
                <div className="Expense">
                        <div className ="card" style={{width: '400px'}}>
                            <div className = "card-body">
                                <h5 className="card-title text-center">
                                    Expenses
                                </h5>
                                {/* <h6 className="card-subtitle">
                                   Expenses
                                </h6> */}

                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="input-description" aria-describedby="descHelp" placeholder="Enter the expenses"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="amount" placeholder = "Enter the amount" />
                                    </div>
                                    <button className="btn btn-success" type="submit">Add</button>
                                </form>
                                



                            </div>
                        </div>
                </div>
        );
 }


}

export default Expense;
