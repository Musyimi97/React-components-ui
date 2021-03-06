import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButtton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();

    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();

    }
    render() {
        const { values, handleChange } =this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="Enter personal  Details" />
                <TextField 
                    hintStyle="Enter your Occupation"
                    floatingLabelText="Occupation"
                    onChange={handleChange ('occupation')}
                    defaultValue = {values.occupation }
                />
                <br/>

                <TextField 
                    hintStyle="Enter city"
                    floatingLabelText="City"
                    onChange={handleChange ('city')}
                    defaultValue = {values.city}
                />
                <br/>

                <TextField 
                    hintStyle="Enter Bio"
                    floatingLabelText="Bio"
                    onChange={handleChange ('bio')}
                    defaultValue = {values.bio}
                />
                <br/>
                <RaisedButtton
                    label="Continue"
                    primary = {true}
                    style = {styles.button}
                    onClick={this.continue}
                />
                    <RaisedButtton
                    label="Back"
                    primary = {false}
                    style = {styles.button}
                    onClick={this.back}
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
export default FormPersonalDetails
