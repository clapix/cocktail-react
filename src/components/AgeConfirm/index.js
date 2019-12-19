import { connect } from "react-redux";
import AgeConfirm from "./AgeConfirm";
import { submitAgeConfirm } from "../../data/actions/state";

const mapStateToProps = state => {
    return {
        displayAgeConfirm: state.displayAgeConfirm,
        
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleAge: () => dispatch(submitAgeConfirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AgeConfirm);
