// import initial, for reset
import initial from "./initial";
import { getSpirits } from "./actions/api";

const getCocktails = (state, { cocktails }) => {
    console.log(cocktails);
    return {
        ...state,
        submitted: true,
        loaded: true,
        cocktails: cocktails,
    }
}

const listSpirits = (state, { spirits }) => {
    console.log(spirits)
    return {
        ...state,
        spirits: spirits,
    }
}

// main reducer function
const reducer = (state, action) => {
    switch (action.type) {
        //function composition for multiple behaviours on one action
        case "cocktailList": return getCocktails(state, action);
        case "spiritsList": return listSpirits(state, action);
        default: return state;
    }
};

export default reducer;