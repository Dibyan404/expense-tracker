import React from 'react';
import Income from './Income/Income';
import Expense from './Expense/Expense';
import Report from './Report/Report';
// import { Object } from 'core-js';
// import PropTypes from 'prop-types';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomes: [],
      expenses: [],
      incomeTotal: 0,
      expenseTotal: 0
    }

    this.handleAddIncome = this.handleAddIncome.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
    this.removeIncome = this.removeIncome.bind(this)
    this.removeExpense = this.removeExpense.bind(this)
  }

  // addIncome(){
  //   // const incomeTotal = 0;
  //   // for(let i = 0; i < this.state.incomes.length; i++ ){
  //   //   incomeTotal = incomeTotal + this.state.incomes[i].incomeAmount; 
  //   // }
  //   // const expenseTotal = 0;
  //   // for(let j = 0; j < this.state.expenses.length; j++){
  //   //     expenseTotal = expenseTotal + this.state.expenses[j].expenseAmount;
  //   // }
  //   // let total = incomeTotal - expenseTotal;
  //   // return total;

  //   // this.incomes = this.props.incomes;
  //   // this.expenses = this.props.expenses;

  //   // let incomeTotal = this.incomes.reduce(function (prev, cur) {
  //   //   return +prev + cur.incomeAmount;
  //   // }, 0);
  //   // let expenseTotal = this.expenses.reduce(function (prev, cur) {
  //   //   return +prev + cur.expenseAmount;
  //   // }, 0);
  //   // const total = incomeTotal - expenseTotal;
  //   // return total;
  // };

  handleAddIncome(incomes) {
    let newIncomes = this.state.incomes;
    newIncomes.push(incomes);
    this.setState((prevState) => {
      return {
        incomes: newIncomes,
        incomeTotal: +incomes.incomeAmount + this.state.incomeTotal
      }

    });

  }
  handleAddExpense(expenses) {
    let newExpenses = this.state.expenses;
    newExpenses.push(expenses);
    this.setState((prevState) => {
      return {
        expenses: newExpenses,
        expenseTotal: +expenses.expenseAmount + this.state.expenseTotal
      }
    })
  }

  removeIncome(id, amount) {
    let arrayObj = this.state.incomes;

    let index = arrayObj.indexOf(x => x.id === id);
    arrayObj.splice(index, 1);
    const amt = amount;
    // const amt = this.state.incomes.incomeAmount
   
    
      this.setState((prevState, props) => {
        return {
          incomes: arrayObj,
          incomeTotal: prevState.incomeTotal - amt
        }

      });
      // this.setState({
      //   incomeTotal: amt
      // })
    if(arrayObj === undefined || arrayObj.length === 0){
      this.setState({
        incomeTotal: 0,
        
      })
    }
  }


  removeExpense(id, amount) {
    let arrayObj = this.state.expenses;

    let index = arrayObj.indexOf(x => x.id === id);
    arrayObj.splice(index, 1);
    const amt = amount;
    // const amt = this.state.arrayObj[index].expenseAmount
   
    
      this.setState((prevState, props) => {
        return {
          expenses: arrayObj,
          expenseTotal: prevState.expenseTotal - amt
        }

      });
      // this.setState({
      //   incomeTotal: amt
      // })
    if(arrayObj === undefined || arrayObj.length == 0){
      this.setState({
        expenseTotal: 0,
        
      })
    }


  }
  render() {
    let previousIncomes;
    if (this.state.incomes) {
      previousIncomes = this.state.incomes.map(incomes => {
        return (
          <Report key={incomes.id} incomes={incomes} removeIncome={this.removeIncome} />

        );
      });
    }
    let previousExpenses;
    if (this.state.expenses) {
      previousExpenses = this.state.expenses.map(expenses => {
        return (
          <Report key={expenses.id} expenses={expenses} removeExpense={this.removeExpense} />
        )
      })
    }

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
                <h1>
                  {/* {this.addIncome()} */}
                  {this.state.incomeTotal - this.state.expenseTotal}
                </h1>
              </div>



            </div>
          </section>

          <section className="input-transaction d-flex justify-content-center">
            <div className="row">
              <div className="col-md-6">
                <Income addIncome={this.handleAddIncome} />
              </div>
              <div className="col-md-6">
                <Expense addExpense={this.handleAddExpense} />
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
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {previousIncomes}
                        {previousExpenses}
                        <tr className="bg-secondary">
                          <th scope="row">#</th>
                          <td><h4>Total</h4></td>
                          <td><h4>{this.state.incomeTotal - this.state.expenseTotal}</h4></td>
                          <th scope="col"></th>
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
