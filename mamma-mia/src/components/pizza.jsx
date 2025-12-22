import  {useEffect, useState} from "react";
import { formatNumber } from "../utils/format";

const Pizza = () => {
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        const getPizza = async () => {
            const response = await fetch("http://localhost:5000/api/pizzas/1");
            const data = await response.json();
            setPizza(data);
        };

        getPizza();
    }, []);

    if (!pizza) return <div>Cargando...</div>;
    return (
    <div className="card card-pizza h-100">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title text-center">{pizza.name}</h5>
                <ul className="mb-3">
                {pizza.ingredients.map((ing) => (
                    <li key={ing}>
                        {ing}
                    </li>
                ))}
                </ul>
            <p className="card-text mb-1 text-center"><strong>{`Precio: $${formatNumber(pizza.price)}`}</strong></p>
        </div>
    </div>
    );
};

export default Pizza;