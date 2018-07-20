import React from 'react';
import Income from './Income/Income';
import Expense from './Expense/Expense';
import Report from './Report/Report';
// import PropTypes from 'prop-types';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomes : [],
      expenses: []
    }
    // this.addIncome = this.addIncome.bind(this);
  }
  componentWillMount() { 
    this.setState({incomes:[
      {
        id:'1',
        incomeContent:'asdf',
        incomeAmount: '555',
        
      },
      {
        id:'2',
        incomeContent:'asdf',
        incomeAmount: '555',
       
      },
      {
        id:'3',
        incomeContent:'asdf',
        incomeAmount: '555',
      }
      


    ],
    expenses:[
      {
        
          id:'3',
          expenseContent:'asdf',
          expenseAmount: '555',
        
      },
      {
        id:'4',
        expenseContent: 'sdjfas',
        expenseAmount:'4664'
      }
    ]
  })
  }

  // addIncome(inc){
  //   // e.preventdefault();
  //   const previousIncomes = this.state.incomes;
  //   previousIncomes.push({
  //     id: previousIncomes.length+1, 
  //     incomeContent: inc,
  //     incomeAmount: inc
  //   });
    
    
  //   this.setState({
  //     incomes: previousIncomes
  //   });
  // }
  handleAddIncome(income){
    // console.log(income);

    let newIncomes = this.state.incomes;
    newIncomes.push(income);
    this.setState({
      incomes: newIncomes
    });
    


  }
  handleAddExpense(expense){
    let newExpenses = this.state.expenses;
    newExpenses.push(expense);
    this.setState({
      expense: newExpenses
    }) 
  }
  
  

  render() {
        // let incomeDetails;
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
      //  const iexp = function IncRExp(){
      //       !this.state.expenses ? {previousIncomes} : {previousExpenses}
      //   }

    return (
      <div className="tracker">
        <div className="container">
          <section className="indicator">
            <div className="text-center mb-5 bg-success">
              <h4> I/E Tracker </h4>
            </div>
            <div className="card mx-auto  mb-4" style={{ width: '400px', height: '300px' }}>
              <div className="text-center" style={{ paddingTop: '75px' }}>
                <h3>Available Budget</h3>
                <h1>Amount:$600</h1>
              </div>



            </div>
          </section>

          <section className="input-transaction d-flex justify-content-center">
            <div className="row">
              <div className="col-md-6">
                {/* <Income addIncome = {this.addIncome} /> */}
                <Income addIncome = {this.handleAddIncome.bind(this)} />
              </div>
              <div className="col-md-6">
                <Expense addExpense = {this.handleAddExpense.bind(this)} />
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
                            <td><h4>39000</h4></td>
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
      // End of main div Tracker
    );
  }
}
// Tracker.PropTypes = {
//   name: PropTypes.string
// }

export default Tracker;
