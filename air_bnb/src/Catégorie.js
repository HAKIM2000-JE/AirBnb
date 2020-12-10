import React from 'react'
import "./Categorie.css"

function Catégorie() {
    return (
        <div className="Categorie">
           <div className="title">
               <h3>Catégorie</h3>
           </div>

           <div className="cat_list">
               <button className="cat_btn">Corps</button>
               <button className="cat_btn">Santé</button>
               <button className="cat_btn">Bebe</button>
               <button className="cat_btn">visage</button>
               <button className="cat_btn">plus</button>
           </div>
            
        </div>
    )
}

export default Catégorie
