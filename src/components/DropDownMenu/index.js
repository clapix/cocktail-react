import { connect } from 'react-redux';
import DropDownMenu from './DropDownMenu';
import { getList } from "../../data/actions/api";


const mapStateToProps = state => {
    return {
        selected: state.selected,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSave: state => dispatch(getList(state))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);