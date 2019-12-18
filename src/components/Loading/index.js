import { connect } from "react-redux";
import Loading from "./Loading";
import { getCocktails } from "../../data/actions/api";


const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getCocktails()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Loading);