import React from 'react'

function CardView(props) {
    return (
        <div className="card-view">
            <div>
                <img src={props.image} alt="ecom pic" />
                <p> {props.name} </p>
                <p> {props.detail} </p>
                <p> {props.price} </p>
                </div>
        </div>
    )
}

export default CardView;
