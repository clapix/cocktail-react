import React from 'react';
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Select from 'react-select';

// let spiritName = ;



class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 1,
            selectedOption: {},
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

        // this.props.handleSelected({...this.state});
        this.props.handleSave({ ...this.state });
        this.props.history.push(`/spirits/${this.state.selected}`);
    }

    handleChangeSpirit(selectedOption) {

        this.setState({ 
            selectedOption,
            selected: selectedOption.value,
        });
        console.log(`Option selected:`, selectedOption, " selected in state: ", selectedOption.value);

        // console.log(event);
        // let spiritName = event.currentTarget.value;
        // console.log(spiritName);

        // let { spirits } = this.props;
        // let spirit = spirits.filter(spirit => spirit.name === spiritName);

        // this.setState({
        //     selected: spirit.id,
        // });
    }

    render() {
        const spiritsList = this.props.spirits.map(spirit => {
            return {
                value: spirit.id, 
                label: spirit.spirit.toLowerCase().replace(spirit.spirit.charAt(0), spirit.spirit.charAt(0).toUpperCase()),
            }
        });

        const { className, spirits } = this.props;
        let selectedOption = this.state.selected;

        return (
            <div className={ className }>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Label>{ this.props.heading }</Form.Label>
                    {/* <Form.Label 
                        className="form-label"
                        list="spirit-choice" 
                        value={ this.props.heading } 
                    />  */}
                 
                    <Select
                        className="choose-spirit"
                        value={ selectedOption.label }
                        onChange={ this.handleChangeSpirit }
                        options={ spiritsList }
                    />
                    
                            {/* { spirits.map((spirit) =>
                                <option
                                    key={spirit.id}
                                    value={spirit.spirit.toLowerCase().replace(spirit.spirit.charAt(0), spirit.spirit.charAt(0).toUpperCase())}
                                />
                            )} */}
                    {/* </datalist> */}
                        <Button type='submit' className="button">Shake It!</Button>
                    
                </Form>
            </div>
        )
    }
}

export default withRouter(DropDownMenu);
