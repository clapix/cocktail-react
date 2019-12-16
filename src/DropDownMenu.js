import React from 'react';
// import { sendDataToAPI } from './data/api';

class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spirits: '',
        }
        this.handleChangeSpirit = this.handleChangeSpirit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();

        // sendDataToAPI(this.state);
    }
    handleChangeSpirit(event) {
        this.setState({
            spirits: event.currentTarget.value
        });
    }

    render() {
        const spirits = ['Whisky', 'Gin', 'Vodka']

        return (
            <form onSubmit={this.handleSubmit} >
                <select onChange={this.handleChangeSpirit}
                    value={this.state.spirits}>
                    {spirits.map((spirit, index) =>
                        <option key={index}>{spirit}</option>
                    )}
                </select>
                <input type='submit' value='Mix' />
            </form>
        )
    }
}
export default DropDownMenu
