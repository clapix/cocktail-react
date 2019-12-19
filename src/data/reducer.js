// import initial, for reset
import initial from "./initial";
import { getSpirits } from "./actions/api";
import { setSelected, submitAgeConfirm } from "./actions/state";

const getCocktails = (state, { 
        cocktails
}) => {
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

const cocktailList = (state, { cocktail }) => {
    console.log(cocktail);
    return {
        ...state,
        cocktail,
    }
}

const ageConfirm = (state, { displayAgeConfirm }) => {
    // console.log(displayAgeConfirm);
    return {
        ...state,
        displayAgeConfirm: false,
    }
    
}
// main reducer function
const reducer = (state, action) => {
    switch (action.type) {
        //function composition for multiple behaviours on one action
        case "cocktailList": return getCocktails(state, action);
        case "spiritsList": return listSpirits(state, action);
        case "setSelected": return selected(state, action);
        case "cocktails": return cocktailList(state, action);
        case "submitAgeConfirm": return ageConfirm(state,action);
        default: return state;
    }
};

export default reducer;