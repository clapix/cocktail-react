import axios from '../../axios';
import { cocktailList, spiritsList, setSelected } from './state';

export const getList = (state) => dispatch => {
    
    axios.get(`/spirits/${state.selected}`).then(({ data }) => {
        console.log(data.data);
        console.log(state.selected);
        dispatch(cocktailList(data.data), setSelected(state.selected));
    })
    // () => {
    // dispatch(cocktailList(dummyCocktailData, state));
    // }
}

export const getSpirits = () => dispatch => {
    axios.get(`/spirits/`).then(({ data }) => {
        dispatch(spiritsList(data.data));
    })
}