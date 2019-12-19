import { connect } from "react-redux";
import AgeConfirm from "./AgeConfirm";

const mapStateToProps = state => {
    return {
        displayAgeConfirm: state.displayAgeConfirm,
        
    };
};

export default connect(mapStateToProps)(AgeConfirm);
