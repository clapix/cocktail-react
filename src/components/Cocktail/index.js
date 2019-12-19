import { connect } from "react-redux";
import Cocktail from "./Cocktail";
import { getCocktail } from "../../data/actions/api";


const mapStateToProps = ({ 
    cocktail,
    
}) => {
    return {
        cocktail,
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleLoadCocktail: (id) => dispatch(getCocktail(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cocktail);