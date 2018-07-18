import React from 'react';
import Income from './Income/Income';
import Expense from './Expense/Expense';
import Report from './Report/Report';
// import PropTypes from 'prop-types';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income : [{
        
      }],
      expense: []
    }
  }
  componentDidMount() { }

  addIncome(amount,desc){
    // e.preventdefault();
    const previousIncome = this.state.income;
    previousIncome.push({
      id: previousIncome.length+1, 
      incomeContent: amount,
      amountContent: desc
    });
    
    this.setState({
      income: previousIncome
    });
  }
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
                <h1>Amount:$600</h1>
              </div>



            </div>
          </section>

          <section className="input-transaction d-flex justify-content-center">
            <div className="row">
              <div className="col-md-6">
                <Income addIncome = {this.addIncome} />
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
                  {/* <Report  /> */}
                  {this.state.income.map((i) => {
                    return(
                      <Report incomeContent = {i.incomeContent} id={i.id} key={i.id} amountContent={i.amountContent} />
                    )
                  })
                }
                </div>
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
// Tracker.PropTypes = {
//   name: PropTypes.string
// }

export default Tracker;
