import React from 'react';
// import PropTypes from 'proptypes';

class Income extends React.Component {
    constructor(props) {
        super(props);
        this.state = [{
            id:'',
            newAmount: '',
            newDesc: ''
        }]
        this.handleIncome = this.handleIncome.bind(this);
        this.handleIncomeAmt = this.handleIncomeAmt.bind(this);
        this.handleIncomeDesc = this.handleIncomeDesc.bind(this);

    }

    handleIncomeAmt = (e) => {
        e.preventDefault();
        
        this.setState({
            newAmount: e.target.value
        });
    }

    handleIncomeDesc(e){
        e.preventDefault();
        this.setState({
            newDesc: e.target.value
        });
    }

    handleIncome(){
        // e.preventDefault();
        this.props.addIncome(this.state.newAmount);
        this.props.addIncome(this.state.newDesc);
        // this.props.addIncome(this.state.id);
        this.setState({
            newAmount: '',
            newDesc:'',
            // id:''
        });
        

    }
    
    
    render() {
        return (
            <div className="Income">
                <div className="card" style={{ width: '400px' }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            Income sources
                                </h5>
                        {/* <h6 className="card-subtitle">
                                    
                                </h6> */}

                        <form>
                            <div className="form-group">
                                <input type="text" value={this.state.newDesc} onChange={this.handleIncomeDesc}  className="form-control" id="input-description" aria-describedby="descHelp" placeholder="Enter the title of the source" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={this.state.newAmount} onChange = {this.handleIncomeAmt}  className="form-control" id="amount" placeholder="amount"/>
                            </div>

                          

                        </form>
                        <button className="btn btn-success" onClick = {this.handleIncome} type="submit">Add</button>




                    </div>
                </div>
            </div>
        );
    }


}

export default Income;
