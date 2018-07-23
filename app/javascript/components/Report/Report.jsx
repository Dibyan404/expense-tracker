import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Income from '../Income/Income';
class Report extends Component {
  constructor(props) {
    super(props);
    // this.handleRemoveIncome = this.handleRemoveIncome(this);
  }
  handleRemoveIncome(id,amount){
    this.props.removeIncome(id,amount);
  }
  handleRemoveExpense(id,amount){
    this.props.removeExpense(id,amount);
  }
  render() {

    if (this.props.incomes) {
      return (
        <tr>
        <th scope="row"><h3>+</h3></th>
        <td>{this.props.incomes.incomeContent}</td>
        <td>{this.props.incomes.incomeAmount}</td>
        <td><button className="btn btn-primary"  onClick={this.handleRemoveIncome.bind(this,this.props.incomes.id,this.props.incomes.incomeAmount)}>Delete</button></td>
      </tr>
      )
    } else {
      return (
       
        <tr>
        <th scope="row"><h3>-</h3></th>
        <td>{this.props.expenses.expenseContent}</td>
        <td>{this.props.expenses.expenseAmount}</td>
        <td><button className="btn btn-primary" onClick={this.handleRemoveExpense.bind(this,this.props.expenses.id,this.props.expenses.expenseAmount)}>Delete</button></td>
      </tr>


      );
    }

  }
}

Report.propTypes = {

};

export default Report;