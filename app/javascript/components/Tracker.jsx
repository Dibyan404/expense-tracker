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


        <section class="report">
          <div className="report-head">
            <div className="report-title text-center">
              <h4 className="my-4">Transaction Reports </h4>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <div className="report-table">
                  <div className="report-table-title">
                    <h5>Income Report</h5>
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
                {/* report-table */}

              </div>

              <div className="col-md-6">
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
              </div>
            </div>
          </div>
        </section>
        {/* section table */}
      </div>
      // End of main div Tracker
    );
  }
}
Tracker.PropTypes = {
  name: PropTypes.string
}

export default Tracker;
