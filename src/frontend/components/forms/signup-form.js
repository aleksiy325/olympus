import React from 'react'
import BaseForm from './base-form'
import { Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import TournamentAPI from '../rest/tournament-api'
import _ from 'lodash';

const api = new TournamentAPI();

//TODO



export default class SignupForm extends BaseForm {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirm: '',
            message: '',
        };  
    }

    submit = async (e) => {
        e.preventDefault();
        let data = await api.createUser(this.username, this.email, this.password);
        console.log(data);
        // this.setState({'message': data});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        return(
            <form onSubmit={this.submit}>
                <Col xs={6} md={4}>
                    <FormGroup validationState={this.valid} >
                        <FormControl type="text" value={this.state.username} placeholder="Username" onChange={this.handleChange} name="username"/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={this.valid} >
                        <FormControl type="text" value={this.state.email} placeholder="Email" onChange={this.handleChange} name="email"/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={this.valid} >
                        <FormControl type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} name="password"/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={this.valid} >
                        <FormControl type="password" value={this.state.confirm} placeholder="Confirm Password" onChange={this.handleChange} name="confirm"/>
                        <FormControl.Feedback />

                    </FormGroup>
                    <Button bsStyle="primary" block type="submit">Submit</Button>
                    <ControlLabel>{this.state.message}</ControlLabel>
                </Col>
            </form>
        )
    } 

};