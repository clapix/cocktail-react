import React, { Component } from "react";

class Cocktail extends Component {
    
    componentDidMount() {
        this.props.handleLoadCocktail(this.props.id);
        
    }
    
    render () {
        
        const { cocktail } = this.props;
        return (
        <>
            <h2>{ cocktail.title }</h2>
            {/* <img src={`assets/${ imageURL }`} alt={ title }/>
            <p>Rating: { rating }/5</p>
            <p>{ ingredients }</p>
            <p>{ description }</p>
            <p>{ glass }</p>
            <p>Author: { author }</p> */}
        </>
        )
    }  
    
}

export default Cocktail;