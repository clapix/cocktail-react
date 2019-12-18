import React from 'react';
import { Jumbotron, Form, Button } from "react-bootstrap";

class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.props.handleSelected({...this.state});
        this.props.handleSave({ ...this.state });
        
    }

    handleChangeSpirit(event) {
        this.setState({
            selected: event.currentTarget.value,
        });
    }

    render() {
        const { spirits } = this.props;

        return (
            <Jumbotron className="hero">
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Label className="form-label">What spirit do you have?</Form.Label>
                    <Form.Control 
                            className="form-control"
                            as="select"
                            onChange={this.handleChangeSpirit}
                            onClick={this.handleDropDown}
                        // value={data[1]}
                        >
                            { spirits.map((spirit) =>
                                <option
                                    key={spirit.id}
                                    value={spirit.id}
                                    
                                >{spirit.spirit.toLowerCase().replace(spirit.spirit.charAt(0), spirit.spirit.charAt(0).toUpperCase())}
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
