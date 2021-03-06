/* eslint-disable default-case */
import React, { Component } from 'react'
import FormUserDetails from './formuserdetails';
import FormPersonalDetails from './formpersonaldetails';

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
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values ={firstName, lastName, email, occupation, city, bio}



        switch (step) {
            case 1:
                return(
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values = {values}
                    />
                );
            case 2:
                return(
                    <FormPersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}

                        handleChange={this.handleChange}
                        values = {values}
                    />
                );

            case 3:
                return <h1>Confirm</h1>

            case 4:
                return <h1>Success</h1>
        
        }
    }
}

export default Userforms
