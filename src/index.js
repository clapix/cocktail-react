import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Provider } from "react-redux";
import store from "./data/store";
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const render = () => {
    let state = store.getState();

    // pass in state.value as a value prop
    ReactDOM.render(
        <Provider store={store}>
            <App
                spirits={state.spirits}
                selected={state.selected}
                cocktails={state.cocktails}
                setCocktail={() => store.dispatch({ type: "spirits", name: "cocktails" })}
            />
        </Provider>,
        document.getElementById('root')
    );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.subscribe(render);
render();