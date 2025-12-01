import React from "react";
import { formatNumber } from "../utils/format";

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand" href="#">Mamma Mía</a>

            <div className="d-flex gap-2">
            {}
            <button className="btn btn-outline-primary">🍕 Home</button>

            {}
            {token ? (
                <>
                <button className="btn btn-outline-secondary">🔓 Profile</button>
                <button className="btn btn-outline-danger">🔒 Logout</button>
                </>
            ) : (
                <>
                <button className="btn btn-outline-success">🔐 Login</button>
                <button className="btn btn-outline-warning">🔐 Register</button>
                </>
            )}

            {}
            <button className="btn btn-outline-dark">🛒 Total: ${formatNumber(total)}</button>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
