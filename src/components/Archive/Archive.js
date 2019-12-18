import React, { Component } from "react";
import DropDownMenuArchive from "../DropDownMenu/DropDownMenuArchive";

class Archive extends Component {
    constructor(props){
        super(props);
    } 

    titleCaseHeading(string) {
        return string;
    }


    render() {
      let { cocktails, submitted } = this.props;

      return ( 
        !cocktails ? <p>No cocktails yet!</p> :
            <>
            <DropDownMenuArchive/>
                <section className="archive-grid">
                    { cocktails.map((cocktail, index) => (
                        <div className="card" key={index}>
                            <a href={"/cocktails/" + cocktail.id}>
                                <h3>{ 
                                    this.titleCaseHeading(cocktail.title)
                                    
                                    }</h3>
                                <img 
                                // style={{maxWidth: "100%", objectFit: "cover"}}
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