import { connect } from "react-redux";
import Loading from "./Loading";

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getList()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Loading);