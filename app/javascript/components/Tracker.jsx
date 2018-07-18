import React from 'react';
import Income from './Income/Income';
import Expense from './Expense/Expense';
import PropTypes from 'prop-types';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    }
  }
  componentDidMount() { }

  render() {
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
                <h1>Amount:<bold>$600</bold></h1>
              </div>



            </div>
          </section>

          <section className="input-transaction d-flex justify-content-center">
            <div className="row">
              <div className="col-md-6">
                <Income />
              </div>
              <div className="col-md-6">
                <Expense />
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
                            <th scope="row"><h3>+</h3></th>
                            <td>Salary</td>
                            <td>40000</td>
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
                  {/* report-table */}

                </div>
                {/* col */}
                {/* <div className="col-md-6">
                <div className="report-table">
                  <div className="report-table-title">
                    <h5>Expense Report</h5>
                  </div>
                  <div className="report-table-body">
                    <table className="table table-dark">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div> */}
              </div>
              {/* row */}
            </div>
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
Tracker.PropTypes = {
  name: PropTypes.string
}

export default Tracker;
