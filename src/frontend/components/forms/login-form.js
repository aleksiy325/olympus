import React from 'react'
import BaseForm from './base-form'
import { Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import TournamentAPI from '../rest/tournament-api'
import { Cookies } from 'react-cookie';
import _ from 'lodash';

const cookies = new Cookies();
const api = new TournamentAPI();
const sessionStorage = window.sessionStorage

const fields = ['username', 'password', 'non_field_errors']

export default class LoginForm extends BaseForm {
    constructor(props) {
        super(props, fields);
        this.initializeStateFields(fields);
    }

    submit = async (e) => {
        e.preventDefault()
        try{
            let response = await api.getToken(this.state.fields.username.value, this.state.fields.password.value);
            let data = await response.json()

            if(response.ok){
                sessionStorage.setItem('token', data.token);
                //TODO: redirect

            }else{
                this.updateStateFields(data);
            }

        }catch(err){
            console.log(err);
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
                    <FormGroup validationState={this.state.fields.password.validationState} >
                        <ControlLabel>{this.state.fields.password.message}</ControlLabel>
                        <FormControl type="password" value={this.state.fields.password.value} placeholder="Password" onChange={this.handleChange} name="password"/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <Button bsStyle="primary" block type="submit">Login</Button>
                    <ControlLabel>{this.state.fields.non_field_errors.message}</ControlLabel>
                </Col>
            </form>
        )
    } 

};