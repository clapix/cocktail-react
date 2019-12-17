import React from "react";

const Archive = ({ cocktails, submitted }) => (

    !submitted ? null :
        <>
            <h2>We recommend...</h2>
            <section className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                {cocktails.map((cocktail, index) => (
                    <div className="card" key={index}>
                        <a href={"/cocktails/" + cocktail.id}>
                            <h3>{cocktail.title}</h3>
                            <img src={"public/assets/" + cocktail.imageURL} /></a>

                    </div>
                ))

                }
            </section>
        </>

)

export default Archive;