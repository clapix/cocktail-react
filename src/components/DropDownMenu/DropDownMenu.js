import React from 'react';
import { data } from '../../data/dummySpirits';
// import { sendDataToAPI } from './data/api';

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
            <form onSubmit={this.handleSubmit} >
                <label>
                    Select the spirit:
                <select
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
                    </select>
                    <input type='submit' value='Mix' />
                </label>
            </form>
        )
    }
}

export default DropDownMenu
