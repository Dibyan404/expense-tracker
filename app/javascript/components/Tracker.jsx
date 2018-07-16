import React from 'react';
import PropTypes from 'prop-types';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: 0,
      expense: 0,
      remaining: 0
    };
  }
  componentDidMount() { }



  render() {
    return (
      <div className="tracker">

        <section className="income-tracker">
          <div className="container">

            <div className="income-input-form">
              <form>
                <div className="row">
                  <div className="col-sm-7">
                    <input type="text" className="form-control" placeholder="Income Source" />
                  </div>
                  <div className="col-sm-3">
                    <input type="text" className="form-control" placeholder="Amount" />
                  </div>
                  <div className="col-sm-2">
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                  </div>


                </div> 
                {/* End of first row */}
                <div className="row">
                  <div className="col-md-12 text-center">
                      <button className="btn btn-info">Add</button>
                  </div>
                </div>
                
              </form>

            </div>
            {/* End of div income-input-form */}
          </div>
          {/* End of container */}
        </section>


      </div>
      // End of main div Tracker
    )
  }
}
Tracker.PropTypes = {
  name: PropTypes.string
}

export default Tracker;
