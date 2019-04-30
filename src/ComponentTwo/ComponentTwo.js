import React, { Component } from 'react';
import './ComponentTwo.css';
import ComponentFour from './ComponentFour.js';

class ComponentTwo extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div className="comp-two bkg-comp">
            ComponentTwo
            <ComponentFour />
        </div>
        );
    }
}

export default ComponentTwo;
