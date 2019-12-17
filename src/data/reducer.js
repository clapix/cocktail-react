// import initial, for reset
import initial from "./initial";


// // important values

// const whatValue = 100;

// // helper functions

// const whatFunction = state => 'some logic';

// // reducer functions (update, calculate...)

const getCocktails = (state, { cocktails }) => {
    return {
        ...state,
        submitted: true,
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