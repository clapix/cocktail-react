import axios from '../../axios';
import { cocktailList } from './state';
import dummyCocktailData from '../dummyCocktailData';

export const getList = (state) => dispatch => {
    // axios.get(`/spirits/${state.selected}`).then(({ data }) => {
    //     dispatch(cocktailList(data));
    //() => {
    dispatch(cocktailList(dummyCocktailData, state));
    // }
}