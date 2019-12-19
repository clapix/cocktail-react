import React, { Component } from "react";
import DropDownMenuArchive from "../DropDownMenu/DropDownMenuArchive";

class Archive extends Component {
    titleCaseHeading(string) {
        return string;
    }

    render() {
      let { cocktails } = this.props;

      const sortedCocktails = cocktails.sort((a, b)=>{
        if (a.title < b.title) {
          return -1; //nameA comes first
        }
        if (a.title > b.title) {
          return 1; // nameB comes first
        }
        return 0;  // names must be equal
      });
      
      
      return ( 
        !cocktails ? <p>No cocktails yet!</p> :
            <>
            <DropDownMenuArchive/>
                <section className="archive-grid">
                    { sortedCocktails.map((cocktail, index) => (

                        
                        <div className="card" key={index}>
                            <a href={"/cocktails/" + cocktail.id}>
                                <h3>{ 
                                    this.titleCaseHeading(cocktail.title)
                                    }
                                </h3>
                                <div className="card-overlay">
                                    <ul>{cocktail.ingredients.split(", ").map((current, index) => (
                                        <li key={index}>{current}</li>
                                    ))}</ul>
                                </div>
                                <img 
                                    alt={ cocktail.title }
                                    src={"../../assets/" + cocktail.imageURL} /></a>

                        </div>
                    )) 

                    }
                </section>
            </>
        )
    }
}
export default Archive;