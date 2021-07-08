import React, { useState } from 'react'
import data from '../data.json';
import CardView from './CardView';





function Contents({ product }) {

    return ( 
        
        <div className="contents">

    
            <div className="image-grid">
            

                {product.map((prod)=>{
                        return (
                            <CardView
                            image={prod.image} 
                            description={prod.description}
                            key={prod.id}
                            price={prod.price}
                            brand={prod.brand}
                            size={prod.size}
                            title={prod.title}
                            category={prod.category}
                        />
                        )
                    })
                    }
            </div>
         </div>
        
    )
}

export default Contents
