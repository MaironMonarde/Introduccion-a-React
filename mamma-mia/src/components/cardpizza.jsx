import React from "react";

const CardPizza = ({ name, price, ingredients = [], img }) => {

    return (
    <div className="card card-pizza h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text text-center"><strong>Ingredientes:</strong> {ingredients.join(", ")}</p>
        <p className="card-text mb-1 text-center"><strong>Precio:</strong> ${price.toLocaleString('es-CL')}</p>
        <div className="mt-auto d-flex justify-content-evenly">
            <button className="btn btn-outline-primary">Ver más</button>
            <button className="btn btn-primary">Añadir</button>
        </div>
        </div>
    </div>
    );
};

export default CardPizza;
