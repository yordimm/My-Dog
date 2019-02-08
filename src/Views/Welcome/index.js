import React, { Component } from 'react';

class Welcome extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="container">
                <h1>{'Welcome'}</h1>
            </div>
        );
    }
}

export default Welcome;