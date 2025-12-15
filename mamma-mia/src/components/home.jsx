import React from "react";
import Header from "./header";
import CardPizza from "./cardpizza";
import { pizzas } from "../assets/pizzas";

const Home = () => {
    return (
        <>
            <Header />

            <section className="my-4">
                <div className="container">
                    <div className="row g-3">
                        {pizzas.map((pizza) => (
                            <div className="col-md-4 mb-3" key={pizza.id}>
                                <CardPizza
                                    name={pizza.name}
                                    price={pizza.price}
                                    ingredients={pizza.ingredients}
                                    img={pizza.img}
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