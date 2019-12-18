
import React, { Component } from "react";
import Header from '../Header';
import Footer from '../Footer';
//import Cocktail from '../Cocktail/Cocktail';
import Loading from '../Loading';
import DropDownMenu from '../DropDownMenu';
import Archive from '../Archive';

import './../../App.css';
import {
  BrowserRouter as Router,
  Route, 
  Switch,
} from "react-router-dom";
import { render } from "@testing-library/react";

class App extends Component {

  componentDidMount() {
    this.props.handleLoad();
}

render() { 

  const { spirits, submitted } = this.props;
  if (!spirits.length){ 
    return <p>Loading...</p>
  }
  return ( 
    <Router>
        {/* <Switch> */}
            <Header/>
            
            {/* home page */}
            <Route exact path="/" component={ DropDownMenu } />
            
            {/* cocktails list page */}
            <Loading>
              <Route exact path="/cocktails" component={ Archive } />
            </Loading>
            
            
            {/* spirit-specific cocktails list page */}
            <Route exact path="/spirits/:id" render={({ match }) => (
              <Archive id={match.params.id} />
            )} />

            {/* single cocktail page */}
            {/* <Route exact path="/cocktails/:id" render={({ match }) => (
              <Cocktail id={match.params.id} />
            )} /> */}

            {/* <Route exact path="/cocktails/spirit/:id/" component={CreateCocktail} /> */}
            {/* <Route exact path="/cocktails/spirit/:id/" render={({ match }) => (
            <EditCocktail id={match.params.id} />
            <Route exact path="/cocktails/create" component={CreateCocktail} />
                  )} /> */}
            <Footer />
        {/* </Switch> */}
    </Router> 

  )}
}

export default App;