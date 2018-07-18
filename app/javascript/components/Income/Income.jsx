import React from 'react';
// import PropTypes from 'proptypes';

class Income extends React.Component{
    constructor(props){
        super(props);
        this.state={
            amount: 0,
        }
    }
    render(){
        return(
                <div className="Income">
                        <div className ="card" style={{width: '400px'}}>
                            <div className = "card-body">
                                <h5 className="card-title text-center">
                                    Income sources
                                </h5>
                                {/* <h6 className="card-subtitle">
                                    
                                </h6> */}

                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="input-description" aria-describedby="descHelp" placeholder="Enter the source of the income"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="amount" placeholder = "Enter the amount" />
                                    </div>
                                   
                                        <button className="btn btn-success" type="submit">Add</button>
                                   
                                </form>
                                
                                 


                            </div>
                        </div>
                </div>
        );
 }


}

export default Income;
