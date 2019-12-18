import { connect } from "react-redux";
import Cocktail from "./Cocktail";
import { getCocktail } from "../../data/actions/api";


const mapStateToProps = ({ 
    cocktail
}) => {
    return {
        cocktail
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getCocktail()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cocktail);