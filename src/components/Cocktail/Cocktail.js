import React, { Component } from "react";

class Cocktail extends Component {
    
    componentDidMount() {
        this.props.handleLoadCocktail(this.props.id); 
    }

    ingredients(){
        let { ingredients } = this.props.cocktail;
        return String(ingredients ? ingredients : "");
    }

    method(){
        let { description } = this.props.cocktail;
        return String(description ? description : "");
    }
    
    rating(number){
        return "star, ".repeat(number).split(", ");
    }

    render () {
        const { cocktail } = this.props;
        const { imageURL, title, glass, author, rating } = cocktail;
        let cocktailGlass = glass ? glass : "tumbler";
        let cocktailAuthor = author ? author : "Anonymous";
        let cocktailImageURL = imageURL ? imageURL : "cocktail.png";

        return (
        <section className="cocktail-single-page">
            <img className="cocktail-image-background" src={"../../assets/drinks.jpg"} alt="cocktails with friends"/>
            
            <section className="cocktail-single-content">
                <h1 className="title-offset">{ title }</h1>

                <div className="image-wrap">
                    <img className="cocktail-image" src={"../../assets/" + cocktailImageURL} alt={ title }/>
                </div>
                <div className="rating-wrap">
                <p>Rating:</p>
                    {this.rating(rating).map((current, index) => (
                        <img className="star-icon" src="../../assets/star.svg" alt="star icon"/>
                    ))}
                </div>

                <div className="glass-wrap">
                    <p>Glass:</p>
                    <img  className="cocktail-glass" src={"../../assets/glasses/" + glass + ".svg"} alt={ glass }/> 
                </div>
                
                <div className="ingredients-block single-page-block card">
                    <h2>Ingredients</h2>
                    <ul >{ this.ingredients().split(", ").map((item, index) => (
                        <li key={index}>{ item }</li>
                    )) }</ul>
                </div>
                
                <div className="description-block single-page-block card">
                    <h2>Method</h2>
                    <ul >{ this.method().split(".").map((item, index) => (
                        <li key={index}>{ item }</li>
                    )) }</ul>
                    <p>Serve in a { cocktailGlass } glass </p>
                </div>

                
                <p className="author">Author: { cocktailAuthor }</p> 
            </section>
        </section>
        )
    }  
    
}

export default Cocktail;