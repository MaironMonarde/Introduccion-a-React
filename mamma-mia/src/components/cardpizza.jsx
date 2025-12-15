
import { formatNumber } from "../utils/format";

const CardPizza = ({ name, price, ingredients, img }) => {

    return (
    <div className="card card-pizza h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title text-center">{name}</h5>
                <ul className="mb-3">
                {ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                ))}
                </ul>
            <p className="card-text mb-1 text-center"><strong>{`Precio: $${formatNumber(price)}`}</strong></p>
        </div>
    </div>
    );
};

export default CardPizza;
