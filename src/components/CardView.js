import React from 'react'

function CardView({key, image, title, price, description, category, brand, size}) {
    return (
        <div className="card-view">
            <div className="card">
                <img src={image} alt="ecom pic" />
                <div className="category">{category.toUpperCase()}</div>
                <div>{title}</div>
                <div className="sizes-brand">
                    <div><strong>Sizes :- </strong>{size.map((size) => `${size} `)}</div>
                    <div><strong>Brand :- </strong>{brand}</div>
                </div>
                <div className="price">{`$${price}`}</div>
                </div>
        </div>
    )
}

export default CardView;
