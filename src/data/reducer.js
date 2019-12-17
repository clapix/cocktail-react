// import initial, for reset
import initial from "./initial";

const getCocktails = (state, { cocktails }) => {
    console.log(cocktails.data);
    return {
        ...state,
        submitted: true,
        loaded: true,
        cocktails: cocktails.data,
    }
}

// main reducer function
const reducer = (state, action) => {
    switch (action.type) {
        //function composition for multiple behaviours on one action
        case "cocktailList": return getCocktails(state, action);
        default: return state;
    }
};

export default reducer;