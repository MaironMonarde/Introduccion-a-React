import { useState } from "react";

const LoginPage = () => {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");

        if (!correo || !contrasena) {
            const msg = "¡Todos los campos son obligatorios!";
            setErrorMsg(msg);
            return;
        }

        if (contrasena.length < 6) {
            const msg = "¡La contraseña debe tener al menos 6 caracteres!";
            setErrorMsg(msg);
            return;
        }

        const msg = "¡Inicio de sesion correcto!";
        setSuccessMsg(msg);
    };

    return (
        <div className="container my-5" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-white">Login</h2>

        {errorMsg && (
            <div className="alert alert-danger" role="alert">
            {errorMsg}
            </div>
        )}
        {successMsg && (
            <div className="alert alert-success" role="alert">
            {successMsg}
            </div>
        )}

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label className="form-label text-white" htmlFor="email">
                Correo
            </label>
            <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Ingresa tu correo"
                value={correo}
                onChange={(event) => setCorreo(event.target.value)}
            />
            </div>

            <div className="mb-4">
            <label className="form-label text-white" htmlFor="password">
                Contraseña
            </label>
            <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(event) => setContrasena(event.target.value)}
            />
            </div>

            <button type="submit" className="btn btn-primary w-100">
            Iniciar Sesión
            </button>
        </form>
        </div>
    );
};

export default LoginPage;
