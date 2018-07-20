import React from 'react';
// import PropTypes from 'proptypes';

class Income extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                newIncome : {
                    
                }
        }
           
        // this.newIncome = this.newIncome.bind(this);
        // this.handleIncomeAmt = this.handleIncomeAmt.bind(this);
        // this.handleIncomeDesc = this.handleIncomeDesc.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleIncomeAmt(e){
    //     e.preventDefault();
        
    //     this.setState({
    //         newAmt: e.target.value
    //     });
    // }

    // handleIncomeDesc(e){
    //     e.preventDefault();
    //     this.setState({
    //         newDesc: e.target.value
    //     });
    // }

    // newIncome(){
    //     // e.preventDefault();
    //     this.props.addIncome(this.state.newDesc);
    //     this.props.addIncome(this.state.newAmount);
    //     // this.props.addIncome(this.state.id);
    //     this.setState({
            
    //         newDesc:'',
    //         newAmount: '',
    //         // id:''
    //     });
        

    // }
    handleSubmit(e){
        e.preventDefault();
        if(this.refs.title.value === ''){
                alert("title is required");
        }else{
            this.setState({newIncome:{
                id: this.refs.title.value.length + 1,
                incomeContent: this.refs.title.value,
                incomeAmount: this.refs.amount.value
            }},
            function(){
                this.props.addIncome(this.state.newIncome);
            });
        }
        
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

                        <form onSubmit = {this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text"  ref="title" className="form-control" id="title" aria-describedby="descHelp" placeholder="Enter the title of the source" />
                            </div>
                            <div className="form-group">
                                <input type="text" ref="amount" className="form-control" id="amount" placeholder="amount"/>
                            </div>

                          <button type="submit" value="Submit" className="btn btn-success">Add</button>
                          {/* <button className = "btn btn-success" onClick = {this.newIncome}>Add</button> */}
                        </form>
                        




                    </div>
                </div>
            </div>
        );
    }


}

export default Income;
