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
// main reducer function
const reducer = (state, action) => {
    switch (action.type) {
        //function composition for multiple behaviours on one action
        case "cocktailList": return getCocktails(state, action);
        case "spiritsList": return listSpirits(state, action);
        case "setSelected": return selected(state, action);
        case "cocktails": return cocktailList(state, action);
        default: return state;
    }
};

export default reducer;