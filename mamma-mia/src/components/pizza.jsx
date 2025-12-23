import  {useEffect, useState} from "react";
import { formatNumber } from "../utils/format";
import CapitalizedText from "./capitalizador";

const Pizza = ({ pizza: pizzas}) => {
    const [pizza, setPizza] = useState(pizzas || null);

    useEffect(() => {

        if (!pizzas) {
            const getPizza = async () => {
                const response = await fetch(`http://localhost:5000/api/pizzas/001`);
                const data = await response.json();
                setPizza(data);
            };
            getPizza();
        }
    }, [pizzas]);

    if (!pizza) return <div>Cargando...</div>;
    return (
    <div className="card card-pizza h-100">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title text-center"><CapitalizedText text={pizza.name} capitalizeAll={true}/></h5>
            <p className="card-text mb-1 text-center">{pizza.desc}</p>
                <ul className="mb-3">
                {pizza.ingredients.map((ing) => (
                    <li key={ing}>
                        <CapitalizedText text={ing} capitalizeAll={true} />
                    </li>
                ))}
                </ul>
            <p className="card-text mb-1 text-center"><strong>{`Precio: $${formatNumber(pizza.price)}`}</strong></p>
            <button className="btn btn-primary mt-auto"
            onClick={() => alert("¡Pizza añadida al carrito con éxito!")}
            >Agregar al carrito</button>

        </div>
    </div>
    );
};

export default Pizza;