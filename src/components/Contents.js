import React, { useState } from 'react'
import { products } from '../data';
import CardView from './CardView';
import { AppContext } from '../AppContext'

function Contents({newProd}) {

    const[data,setdata]=useState(products);


    const HightoLow=()=>{
        setdata([...data].sort((a,b)=>b.price-a.price))
        console.log(data)
    };
    const LowtoHigh=()=>{
        setdata([...data].sort((a,b)=>a.price-b.price))
    };

    




    return (
        
        <div className="contents">

        <button onClick={HightoLow}>
            High to Low
        </button>
        <button onClick={LowtoHigh}>
            Low to High
        </button>

        <div className="image-grid">
        {data.map((product)=>{
                return (
                    <CardView
                    image={product.img} 
                    detail={product.description}
                    key={product.id}
                    price={product.price}
                 />
                )
            })
            }

        </div>


            
            


        </div>
        
    )
}

export default Contents
