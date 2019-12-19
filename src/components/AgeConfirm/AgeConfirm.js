import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class AgeConfirm extends Component {
    constructor(props) {
        super(props);
        this.handleAgeConfirm = this.handleAgeConfirm.bind(this);
    }

    handleAgeConfirm(e) {
        
        e.preventDefault();
        this.setState({ displayAgeConfirm: false });
        this.props.handleAge();
    
    }

    render() {

        return (

            <div className="age-confirm">
                <div className="text-box">
                    <h2 
                        className="age-message"
                    >Please confirm that you are over the legal drinking age for your country of residence.</h2>
                    <Form 
                        
                        onSubmit={ this.handleAgeConfirm }>
                        <Button
                        className="age-button"
                        type="submit" 
                        variant="btn btn-danger"
                        >Confirm</Button>
                    </Form>
                </div>
            </div>
        )
    };
}

export default AgeConfirm;