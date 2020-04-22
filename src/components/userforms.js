import React, { Component } from 'react'

export class Userforms extends Component {
    state={
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio:''

    }

    // proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step:step + 1
        });
    }
    
       // Back to previous step
       nextStep = () => {
        const {step} = this.state;
        this.setState({
            step:step - 1
        });
    }
    
    // handle fields change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});

    } 

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Userforms
