
import React, { Component } from "react";
import Header from '../Header';
import Footer from '../Footer';
import Cocktail from '../Cocktail';
import Loading from '../Loading';
import DropDownMenuHome from '../DropDownMenu/DropDownMenuHome';
import Archive from '../Archive';
import AgeConfirm from '../AgeConfirm';

import './../../style.css';
import {
  BrowserRouter as Router,
  Route, 
} from "react-router-dom";

class App extends Component {

  componentDidMount() {
    this.props.handleLoad();
}

render() { 


  const { spirits, submitted, displayAgeConfirm } = this.props;

  if (!spirits.length){ 
    return <p>Loading...</p>
  }
  return ( 
    <Router>
            <Header/>
          
            {/* home page */}
            <Route exact path="/" render={() => (
              <>
                { !displayAgeConfirm ? 
                <DropDownMenuHome /> :
                <AgeConfirm/> }
              </>
            )} />
            
            {/* cocktails list page */}
            <Loading>
              <Route exact path="/cocktails" component={ Archive } />
            </Loading>
            
            
            {/* spirit-specific cocktails list page */}
            <Route exact path="/spirits/:id" render={({ match }) => (
              <Archive id={match.params.id} />
            )} />

            {/* single cocktail page */}
            <Route exact path="/cocktails/:id" render={({ match }) => (
              <Cocktail id={match.params.id} />
            )} />

            <Footer />
    </Router> 

  )}
}

export default App;