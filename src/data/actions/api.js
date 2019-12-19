import axios from '../../axios';
import { cocktailList, spiritsList, setSelected, cocktails } from './state';

//API request for all cocktails on system for given spirit, dispatching cocktailList state action 
export const getList = (state) => dispatch => {
    axios.get(`/spirits/${state.selected}`).then(({ data }) => {
        dispatch(cocktailList(data.data), setSelected(state.selected));
    })
}

//API request to get all inputted spirits on system for selection by user for given spirit, dispatching cocktailList state action 
export const getSpirits = () => dispatch => {
    axios.get(`/spirits/`).then(({ data }) => {
        dispatch(spiritsList(data.data));
    })
}

//API request for all cocktails on system, dispatching cocktailList state action 
export const getCocktails = () => dispatch => {
    // now use axios to make an API request
    axios.get("/cocktails").then(({ data }) => {
        dispatch(cocktailList(data.data));
}); };

//API request for single cocktail, dispatching cocktails state action 
export const getCocktail = (id) => dispatch => {
    // now use axios to make an API request
    axios.get(`/cocktails/${id}`).then(({ data }) => {
        dispatch(cocktails(data.data));
}); };