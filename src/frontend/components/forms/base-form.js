import React from 'react';
import _ from 'lodash';

export default class BaseForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    initializeStateFields = (formFields) => {
        let fields = {};
        _.each(formFields, (key) => {
            fields[key] = {
                value: '',
                message: '',
                validationState: null
            };
        });
        this.state = _.assign({fields}, this.state);
    }

    updateStateFields = (data) => {
        let fields = this.state.fields;
        _.each(fields, (val, key) => {
            fields[key] = {
                value: val.value,
                message: data[key],
                validationState:  (data[key] ? 'error': null),
            };
        });
        this.setState({fields});
    }

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name].value = e.target.value;
        this.setState({fields});
    }
}