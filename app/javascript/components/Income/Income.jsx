import React from 'react';
import uuid from 'uuid';
// import PropTypes from 'proptypes';

class Income extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.refs.title.value === ''){
                alert("title is required");
        }else{
            this.setState({newIncome:{
                id: uuid.v4(),
                incomeContent: this.refs.title.value,
                incomeAmount: this.refs.amount.value,
                
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
                        <form onSubmit = {this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text"  ref="title" className="form-control" placeholder="Enter the title of the source" />
                            </div>
                            <div className="form-group">
                                <input type="number" ref="amount" className="form-control" placeholder="amount" />
                            </div>

                          <button type="submit" value="Submit" className="btn btn-success">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }


}

export default Income;
