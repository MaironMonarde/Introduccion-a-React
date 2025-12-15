import React from "react";
import { formatNumber } from "../utils/format";

const Navbar = ({setView, token}) => {
    const total = 25000;

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand"
                onClick={() => setView("home")}
                style={{ cursor: "pointer" }}>
                Mamma Mía
            </a>

            <div className="d-flex gap-2">
            <button
                className="btn"
                onClick={() => setView("home")}
                >
                🍕 Home
            </button>

            <button
                className="btn"
                onClick={() => setView("cart")}
            >
                🛒 Total: ${formatNumber(total)}
            </button>

            {token ? (
                <>
                <button className="btn">🔓 Profile</button>
                <button className="btn">🔒 Logout</button>
                </>
            ) : (
                <>
                <button
                    className="btn"
                    onClick={() => setView("login")}
                    >
                    🔐 Login
                    </button>

                <button 
                    className="btn"
                    onClick={() => setView("register")}
                    >
                    🔐 Register
                    </button>
                </>
            )}
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
