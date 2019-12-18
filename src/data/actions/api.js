import axios from '../../axios';
import { cocktailList } from './state';

export const getList = (state) => dispatch => {
    
    axios.get(`/spirits/${state.selected}`).then(({ data }) => {
        console.log(data);
        console.log(state.selected);
        dispatch(cocktailList(data));
    })
    // () => {
    // dispatch(cocktailList(dummyCocktailData, state));
    // }
}
