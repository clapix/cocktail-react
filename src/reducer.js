// import initial, for reset
import initial from "./initial";


// // important values

// const whatValue = 100;

// // helper functions

// const whatFunction = state => 'some logic';

// // reducer functions (update, calculate...)

const setCocktail = (state, action) => {
    return {
        ...state,
        cocktails: {
            ...state.cocktails,
            [action.id]: action.cocktail
        }
    }
}

// main reducer function
const reducer = (state, action) => {
    switch (action.type) {
        //function composition for multiple behaviours on one action
        // case "setCocktail": return something(funct(funct(state, action)));
        default: return state;
    }
};

export default reducer;