import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButtton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();

    }
    render() {
        const { values, handleChange } =this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="Enter User Details" />
                <TextField 
                    hintStyle="Enter your Firts Name"
                    floatingLabelText="First Name"
                    onChange={handleChange ('firstName')}
                    defaultValue = {values.firstName}
                />
                <br/>

                <TextField 
                    hintStyle="Enter your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange ('lastName')}
                    defaultValue = {values.lastName}
                />
                <br/>

                <TextField 
                    hintStyle="Enter your email"
                    floatingLabelText="email"
                    onChange={handleChange ('email')}
                    defaultValue = {values.email}
                />
                <br/>
                <RaisedButtton
                    label="Continue"
                    primary = {true}
                    style = {styles.button}
                    onClick={this.continue}
                />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:15
    }
}
export default FormUserDetails
