// import initial, for reset
import initial from "./initial";
import { getSpirits } from "./actions/api";
import { setSelected } from "./actions/state";

const getCocktails = (state, { cocktails }) => {
    // console.log(cocktails);
    return {
        ...state,
        submitted: true,
        loaded: true,
        cocktails: cocktails,
    }
}

const listSpirits = (state, { spirits }) => {
    console.log(spirits);
    return {
        ...state,
        spirits: spirits,
    }
}

const selected = (state, { selected }) => {
    console.log(selected);
    return {
        ...state,
        selected,
    }
}

// main reducer function
const reducer = (state, action) => {
    switch (action.type) {
        //function composition for multiple behaviours on one action
        case "cocktailList": return getCocktails(state, action);
        case "spiritsList": return listSpirits(state, action);
        case "setSelected": return selected(state, action);
        default: return state;
    }
};

export default reducer;