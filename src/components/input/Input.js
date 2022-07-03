import React, { Component } from 'react';
import "./Input.css"

class Input extends Component {
    render() {
        return (
            <input value={0} type="text" className='input' readOnly={true}/>
        );
    }
}

export default Input;