import { connect } from "react-redux";
import Loading from "./Loading";
import { getList } from "../../data/actions/api";

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getList()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Loading);