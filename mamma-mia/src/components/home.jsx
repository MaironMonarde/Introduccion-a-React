import React, { useEffect, useState } from "react";
import Header from "./header";
import CardPizza from "./cardpizza";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        const getPizzas = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/pizzas");
                const data = await response.json();
                setPizzas(data);
            } catch (error) {
                console.error("Error fetching pizzas:", error);
            }
        };

        getPizzas();
    }   , []);

    return (
        <>
            <Header />

            <section className="my-4">
                <div className="container">
                    <div className="row g-3">
                        {pizzas.map((pizza) => (
                            <div className="col-md-4 mb-3" key={pizza.id}>
                                <CardPizza pizza={pizza}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;