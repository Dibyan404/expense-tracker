import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Income from '../Income/Income';
class Report extends Component {
  constructor(props) {
    super(props);
    // this.id = props.id;
    // this.incomeContent = props.incomeContent;
    // this.incomeAmount = props.incomeAmount;
  }

  // componentWillMount() {

  // }

  // componentDidMount() {

  // }

  // componentWillReceiveProps(nextProps) {

  // }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  // componentWillUpdate(nextProps, nextState) {

  // }

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {

  // }

  render() {

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
}

Report.propTypes = {

};

export default Report;