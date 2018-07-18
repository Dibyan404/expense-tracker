import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Report extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.incomeContent = props.incomeContent;
        this.incomeAmount = props.incomeAmount;
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="report-table">
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
                          <tr>
                            <th scope="row"><h3>{this.props.key}</h3></th>
                            <td>{this.incomeContent}</td>
                            <td>{this.incomeAmount}</td>
                            <td><button className="btn btn-sm btn-info">Edit</button><button className="btn btn-sm btn-info ml-2">Delete</button></td>
                          </tr>
                          <tr>
                            <th scope="row"><h3>-</h3></th>
                            <td>Fooding</td>
                            <td>100</td>
                            <td><button className="btn btn-sm btn-info">Edit</button><button className="btn btn-sm btn-info ml-2">Delete</button></td>
                          </tr> 
                          <tr className="bg-warning text-white">
                            <th scope="row">#</th>
                            <td><h4>Total</h4></td>
                            <td><h4>39000</h4></td>
                            <td>-</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
        );
    }
}

Report.propTypes = {

};

export default Report;