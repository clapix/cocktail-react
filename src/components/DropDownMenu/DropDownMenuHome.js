import { connect } from 'react-redux';
import DropDownMenu from './DropDownMenu';
import { getList, getSpirits } from "../../data/actions/api";
import { setSelected } from "../../data/actions/state";


const mapStateToProps = state => {
    return {
        selected: state.selected,
        spirits: state.spirits,
        className: "jumbotron",
        heading: "What Spirit Do You Have?"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSave: state => dispatch(getList(state)),
        handleSpiritList: () => dispatch(getSpirits()),
        handleSelected: (state) => dispatch(setSelected(state))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);