import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ComponentFour.css';

class ComponentFour extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div className="comp-four">
            ComponentFour
            {
                this.props.name ? 
                    <span className='app-user-name'>{this.props.name}</span>
                :
                    null
            }
        </div>
        );
    }
}



const mapStateToProps = (state)=> {
    return {
      name: state.name
    };
}
export default connect(mapStateToProps)(ComponentFour);
