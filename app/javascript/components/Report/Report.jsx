import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Income from '../Income/Income';
class Report extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {

    if (this.props.incomes) {
      return (
        <tr>
        <th scope="row"><h3>+</h3></th>
        <td>{this.props.incomes.incomeContent}</td>
        <td>{this.props.incomes.incomeAmount}</td>
      </tr>
      )
    } else {
      return (
       
        <tr>
        <th scope="row"><h3>-</h3></th>
        <td>{this.props.expenses.expenseContent}</td>
        <td>{this.props.expenses.expenseAmount}</td>
      </tr>


      );
    }

  }
}

Report.propTypes = {

};

export default Report;