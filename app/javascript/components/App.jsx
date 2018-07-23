import React, { Component } from 'react'
import PropTypes from 'prop-types'



function Income(props) {
 

    return (
        
        <div className="Income">
            <div className="card" style={{ width: '400px' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">
                        Income sources
                    </h5>
                    {/* <h6 className="card-subtitle">
                                
                            </h6> */}
                    <form onSubmit = {this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <input type="text"  ref="title" className="form-control" id="title" aria-describedby="descHelp" placeholder="Enter the title of the source" />
                        </div>
                        <div className="form-group">
                            <input type="number" ref="amount" className="form-control" id="amount" placeholder="amount"/>
                        </div>

                      <button type="submit" value="Submit" className="btn btn-success">Add</button>
                      {/* <button className = "btn btn-success" onClick = {this.newIncome}>Add</button> */}
                    </form>
                    




                </div>
            </div>
        </div>
    );

}




function Expense(props) {

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
                                <input type="number" ref="amount" className="form-control" id="amount" placeholder = "Enter the amount" />
                            </div>
                            <button type = "submit" value ="submit" className="btn btn-success" type="submit">Add</button>
                        </form>
                        



                    </div>
                </div>
        </div>
);

}



function Report(props) {
    if (this.props.incomes) {
        return (
          <tr>
          <th scope="row"><h3>+</h3></th>
          <td>{this.props.incomes.incomeContent}</td>
          <td>{this.props.incomes.incomeAmount}</td>
  
          {/* <td>{this.props.expenses.expenseContent}</td>
            <td>{this.props.expenses.expenseAmount}</td> */}
          <td><button className="btn btn-sm btn-info">Edit</button><button className="btn btn-sm btn-info ml-2">Delete</button></td>
        </tr>
        )
      } else {
        return (
         
          <tr>
          <th scope="row"><h3>-</h3></th>
          <td>{this.props.expenses.expenseContent}</td>
          <td>{this.props.expenses.expenseAmount}</td>
  
          {/* <td>{this.props.expenses.expenseContent}</td>
                            <td>{this.props.expenses.expenseAmount}</td> */}
          <td><button className="btn btn-sm btn-info">Edit</button><button className="btn btn-sm btn-info ml-2">Delete</button></td>
        </tr>
  
  
        );
      }


}




class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incomes: [],
            expenses: []
        }

    }
    
    render() {
        let previousIncomes;
        if(this.state.incomes){
          previousIncomes = this.state.incomes.map(incomes => {
            return(
              <Report key={incomes.id} incomes = {incomes} />
              
            );
          });
        }
        let previousExpenses;
        if(this.state.expenses){
            previousExpenses = this.state.expenses.map(expenses => {
                return(
                  <Report key={expenses.id} expenses={expenses} />
                )
            })
        }

        return (
            <div>
                <div className="tracker">
                    <div className="container">
                        <section className="indicator">
                            <div className="text-center mb-5 bg-success">
                                <h4> I/E Tracker </h4>
                            </div>
                            <div className="card mx-auto  mb-4" style={{ width: '400px', height: '300px' }}>
                                <div className="text-center" style={{ paddingTop: '75px' }}>
                                    <h3>Available Budget</h3>
                                    <h1>

                                        {/* {this.sumIncome.bind(this)}
                  {this.state.sum} */}
                                        {/* {this.state.sum} */}
                                        {/* {this.addIncome()} */}
                                        {/* {this.state.sum} */}
                                        {/* {this.incomes.sum("incomeAmount").bind(this)} */}

                                    </h1>
                                </div>



                            </div>
                        </section>

                        <section className="input-transaction d-flex justify-content-center">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <Income addIncome = {this.addIncome} /> */}
                                    <Income addIncome={this.handleAddIncome} />
                                </div>
                                <div className="col-md-6">
                                    {/* <Expense addExpense={this.handleAddExpense} /> */}
                                </div>
                            </div>
                        </section>


                        <section className="report">
                            <div className="report-head">
                                <div className="report-title text-center">
                                    <h4 className="my-4">Transaction Reports </h4>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-12">
                                        {/* <Report  /> */}
                                        <div className="report-table-title">
                                            <h5>Income Report</h5>
                                        </div>
                                        <div className="report-table-body table-responsive">
                                            <table className="table table-hover table-sm">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th scope="col">+/-</th>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Edit/Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* {this.state.incomes.map((i) => {
                              return(
                                <Report incomeContent = {i.incomeContent} id={i.id} key={i.id} incomeAmount={i.incomeAmount} />
                              )
                            })
                          } */}





                                                    {previousIncomes}
                                                    {previousExpenses}


                                                    {/* {previousIncomes} */}
                                                    <tr className="bg-secondary">
                                                        <th scope="row">#</th>
                                                        <td><h4>Total</h4></td>
                                                        <td><h4>555</h4></td>
                                                        <td>-</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row */}

                        </section>
                        {/* section table */}
                    </div>


                    <section className="footer mt-4">
                        <div className="text-center bg-info">
                            <p>@enliv-interview-project</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

componentName.propTypes = {

}

export default componentName