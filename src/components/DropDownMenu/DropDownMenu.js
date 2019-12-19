import React from 'react';
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1,
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
        this.props.history.push(`/spirits/${this.state.selected}`);
    }

    handleChangeSpirit(event) {
        this.setState({
            selected: event.currentTarget.value,
        });
    }

    render() {
        const { spirits, className } = this.props;

        return (
            <div className={className}>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Label className="form-label">{this.props.heading}</Form.Label>
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
            </div>
        )
    }
}

export default withRouter(DropDownMenu);
