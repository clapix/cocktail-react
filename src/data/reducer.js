
// import initial, for reset
import initial from "./initial";
import { getSpirits } from "./actions/api";
import { setSelected, submitAgeConfirm } from "./actions/state";

const getCocktails = (state, { 
        cocktails
}) => {
    return {
        ...state,
        submitted: true,
        loaded: true,
        cocktails: cocktails,

    }
}

const listSpirits = (state, { spirits }) => {
    return {
        ...state,
        spirits: spirits,
    }
}

const selected = (state, { selected }) => {
    return {
        ...state,
        selected,
    }
}

const cocktailList = (state, { cocktail, selected }) => {
    return {
        ...state,
        cocktail,
        selected
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