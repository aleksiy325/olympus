import React from 'react';
import BaseForm from './base-form';
import { Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import TournamentAPI from '../rest/tournament-api';

const api = new TournamentAPI();
const sessionStorage = window.sessionStorage;
const fields = ['username', 'email', 'password', 'confirm', 'non_field_errors'];

export default class SignupForm extends BaseForm {
    constructor(props) {
        super(props, fields);
        this.initializeStateFields(fields);
    }

    submit = async (e) => {
        e.preventDefault();
        try{
            let response = await api.createUser(this.state.fields.username.value, this.state.fields.email.value, this.state.fields.password.value);
            let data = await response.json();

            if(response.ok){
                sessionStorage.setItem('token', data.token);
                //TODO: redirect

            }else{
                this.updateStateFields(data);
            }

        }catch(err){
            console.log(err);
            //TODO: non_field_error
        }
    }

    render() {
        return(
            <form onSubmit={this.submit}>
                <Col xs={6} md={4}>
                    <FormGroup validationState={this.state.fields.username.validationState} >
                        <ControlLabel>{this.state.fields.username.message}</ControlLabel>
                        <FormControl type="text" value={this.state.fields.username.value} placeholder="Username" onChange={this.handleChange} name="username"/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={this.state.fields.email.validationState} >
                        <ControlLabel>{this.state.fields.email.message}</ControlLabel>
                        <FormControl type="text" value={this.state.fields.email.value} placeholder="Email" onChange={this.handleChange} name="email"/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={this.state.fields.password.validationState} >
                        <ControlLabel>{this.state.fields.password.message}</ControlLabel>
                        <FormControl type="password" value={this.state.fields.password.value} placeholder="Password" onChange={this.handleChange} name="password"/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={this.state.fields.password.validationState} >
                        <ControlLabel>{this.state.fields.confirm.message}</ControlLabel>
                        <FormControl type="password" value={this.state.fields.confirm.value} placeholder="Confirm Password" onChange={this.handleChange} name="confirm"/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <Button bsStyle="primary" block type="submit">Submit</Button>
                </Col>
            </form>
        );
    } 

}