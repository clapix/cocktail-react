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

            <Container>
                <h2>Please confirm that you are over the legal drinking age for your country of residence.</h2>
                <Form onSubmit={ this.handleAgeConfirm }>
                    <Button 
                    type="submit" 
                    variant="btn btn-danger"
                    >Confirm</Button>
                </Form>
            </Container>
        )
    };
}

export default AgeConfirm;