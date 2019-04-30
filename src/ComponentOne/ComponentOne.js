import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ComponentOne.css';

class ComponentOne extends Component {
    constructor(props){
        super(props);

        this.inputChange = this.inputChange.bind(this);
    }


    inputChange = (e)=>{
        this.props.onInputChange(e.target.value)
    }

    render() {
        return (
        <div className="comp-one bkg-comp">
            ComponentOne
            <input placeholder='Type your name...' onChange={this.inputChange} type='text' value={this.props.name} />
        </div>
        );
    }
}

const mapStateToProps = (state)=> {
    console.log("name: ",state);

    return {
      name: state.name
    };
}

// const mapStateToProps = (state) => ({
//     name: state.name
// });



const mapDispatchToProps = (dispatch)=> ({
    onInputChange: (data) => {
        console.log("ownProps: ",data);
       dispatch({
            type: 'CHANGE_INPUT',
            name: data,
       });
    }
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);

