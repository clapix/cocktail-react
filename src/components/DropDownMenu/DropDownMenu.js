import React from 'react';
import { data } from '../../data/dummySpirits';
// import { sendDataToAPI } from './data/api';
import { Jumbotron, Form, Button } from "react-bootstrap";

class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // spirits: [],
            selected: 0,
            submitted: false,
        }
        this.handleChangeSpirit = this.handleChangeSpirit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();
        this.setState({
            submitted: true
        })
        this.props.handleSave({ ...this.state });
    }

    // sendDataToAPI(this.state);

    handleChangeSpirit(event) {
        console.log(event.currentTarget.value);
        this.setState({
            selected: event.currentTarget.value,
        });
    }

    render() {
        // const spirits = [1: { spirit: 'Whisky', 'Gin', 'Vodka']

        return (
            <Jumbotron className="hero">
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Label className="form-label">What spirit do you have?</Form.Label>
                    <Form.Control 
                            className="form-control"
                            as="select"
                            onChange={this.handleChangeSpirit}
                        // value={data[1]}
                        >
                            {data.map((spirit) =>
                                <option
                                    value={spirit.id}
                                    key={spirit.id}
                                >{spirit.spirit}
                                </option>
                            )}
                        </Form.Control>
                        <Button type='submit' className="button">Shake It!</Button>
                    
                </Form>
            </Jumbotron>
        )
    }
}

export default DropDownMenu
