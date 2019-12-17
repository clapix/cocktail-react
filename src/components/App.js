import React from "react";
import Header from './Header';
import Footer from './Footer';
import Cocktail from './Cocktail';
import Loading from './Loading';

import DropDownMenu from './DropDownMenu';
import Archive from './Archive';

import './../App.css';
import {
  BrowserRouter as Router,
  Route, Switch,
} from "react-router-dom";

const App = ({
  spirits,
  selected,
  cocktails,
}) => (
    <>
      <Header />

      {/* // homepage
// single cocktail page
// result page
// create a cocktail
// edit a cocktail */}

      {/* <Router>
        <Switch> */}
          {/* <Route exact path="/" component={DropDownMenu} /> */}
          <DropDownMenu />
          {/* <Loading> */}
            <Archive />
          {/* </Loading> */}


          {/* <Route path="/spirits" component={Archive} /> */}

          {/* <Route exact path="/cocktails/:id" render={({ match }) => (
            <Cocktail id={match.params.id} />
          )} /> */}

          {/* <Route exact path="/cocktails/spirit/:id/" component={CreateCocktail} /> */}
          {/* <Route exact path="/cocktails/spirit/:id/" render={({ match }) => (
    <EditCocktail id={match.params.id} />
    <Route exact path="/cocktails/create" component={CreateCocktail} />
                )} /> */}
         {/* </Switch> */}
      {/* </Router>  */}

      <Footer />
    </>
  );

export default App;