import React from 'react';
// import PropTypes from 'proptypes';
// import 'Expense.css';

class Expense extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newExpense: {
                
            }
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.refs.title.value === ""){
            alert("title is required");
            
        }else{
            this.setState({
                newExpense:{
                    id: this.refs.amount.value +1,
                    expenseContent: this.refs.title.value,
                    expenseAmount: this.refs.amount.value
                }
            },function(){
                this.props.addExpense(this.state.newExpense);
            })
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

                                <form onSubmit = {this.handleSubmit.bind(this)}>
                                    <div className="form-group">
                                        <input type="text" ref="title" className="form-control" id="input-description" aria-describedby="descHelp" placeholder="Enter the expenses"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" ref="amount" className="form-control" id="amount" placeholder = "Enter the amount" />
                                    </div>
                                    <button type = "submit" value ="submit" className="btn btn-success" type="submit">Add</button>
                                </form>
                                



                            </div>
                        </div>
                </div>
        );
 }


}

export default Expense;
