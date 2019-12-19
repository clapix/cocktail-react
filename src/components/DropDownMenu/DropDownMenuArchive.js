import { connect } from 'react-redux';
import DropDownMenu from './DropDownMenu';
import { getList, getSpirits } from "../../data/actions/api";
import { setSelected } from "../../data/actions/state";


const mapStateToProps = state => {
    return {
        selected: state.selected,
        spirits: state.spirits,
        className: "menu",
        heading: "",
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSave: state => dispatch(getList(state)),
        handleSpiritList: () => dispatch(getSpirits()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);