import React from "react";

const Archive = ({ cocktails, submitted }) => (

    !cocktails ? <p>No cocktails yet!</p> :
        <>
            <h2>We recommend...</h2>
            <section classtitle="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                { cocktails.map((cocktail, index) => (
                    <div className="card" key={index}>
                        <a href={"/cocktails/" + cocktail.id}>
                            <h3>{ 
                                cocktail.title.toLowerCase().replace(cocktail.title.charAt(0), cocktail.title.charAt(0).toUpperCase())
                                }</h3>
                            <img style={{maxWidth: "100%", objectFit: "cover"}} src={"./assets/" + cocktail.imageURL} /></a>

                    </div>
                ))

                }
            </section>
        </>

)

export default Archive;