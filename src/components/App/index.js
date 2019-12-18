import { connect } from "react-redux";
// import Loading from "./Loading";
import { getSpirits } from "../../data/actions/api";
import App from "./App";

const mapStateToProps = ({ spirits }) => ({
    spirits,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getSpirits()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);