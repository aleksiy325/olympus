import React from 'react';
import BaseForm from './base-form';
import { Col, FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import TournamentAPI from '../rest/tournament-api';

const api = new TournamentAPI();
const sessionStorage = window.sessionStorage;
const fields = ['name', 'private', 'non_field_errors'];

export default class GroupForm extends BaseForm {
    constructor(props) {
        super(props, fields);
        this.initializeStateFields(fields);
    }


    submit = async (e) => {
        e.preventDefault();
        try{
            let response = await api.createGroup(this.state.fields.name.value, this.state.fields.private.value);
            let data = await response.json();

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
                    <FormGroup validationState={this.state.fields.name.validationState} >
                        <ControlLabel>{this.state.fields.name.message}</ControlLabel>
                        <FormControl type="text" value={this.state.fields.name.value} placeholder="name" onChange={this.handleChange} name="name"/>
                        <FormControl.Feedback />
                    </FormGroup>
                    //TODO add private checkbox
                    <Button bsStyle="primary" block type="submit">Create</Button>
                    <ControlLabel>{this.state.fields.non_field_errors.message}</ControlLabel>
                </Col>
            </form>
        );
    } 

}