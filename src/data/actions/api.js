import axios from '../../axios';
import { cocktailList, spiritsList, setSelected } from './state';

export const getList = (state) => dispatch => {
    
    axios.get(`/spirits/${state.selected}`).then(({ data }) => {
        console.log(data.data);
        console.log(state.selected);
        dispatch(cocktailList(data.data), setSelected(state.selected));
    })
    
}

export const getSpirits = () => dispatch => {
    axios.get(`/spirits/`).then(({ data }) => {
        dispatch(spiritsList(data.data));
    })
}

export const getCocktails = () => dispatch => {
    // now use axios to make an API request
    axios.get("/cocktails").then(({ data }) => {
        dispatch(cocktailList(data.data));
}); };