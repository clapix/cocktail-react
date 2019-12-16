import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./store";
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = () => {
    let state = store.getState();

    // pass in state.value as a value prop
    ReactDOM.render(
        <App
            spirits={state.spirits}
            selected={state.selected}
            cocktails={state.cocktails}
            setCocktail={() => store.dispatch({ type: "spirits", name: "cocktails" })}

        />,
        document.getElementById('root')
    );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.subscribe(render);
render();