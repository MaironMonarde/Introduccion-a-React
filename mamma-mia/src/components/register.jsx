import { useState } from "react";

const RegisterPage = () => {

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmContrasena, setConfirmContrasena] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrorMsg("");
        setSuccessMsg("");

        if (!correo || !contrasena || !confirmContrasena) {
        const msg = "¡Todos los campos son obligatorios!";
        setErrorMsg(msg);
        return;
        }

        if (contrasena.length < 6) {
        const msg = "¡La contraseña debe tener al menos 6 caracteres!";
        setErrorMsg(msg);
        return;
        }

        if (contrasena !== confirmContrasena) {
        const msg = "¡Ambas contraseñas deben ser iguales!";
        setErrorMsg(msg);
        return;
        }

        const msg = "¡Te registraste con éxito!";
        setSuccessMsg(msg);

        setCorreo("");
        setContrasena("");
        setConfirmContrasena("");
    };

    return (
        <div className="container my-5" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-white">Register</h2>

        {}
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
            <label className="form-label text-white" htmlFor="correo">
                Email
            </label>
            <input
                id="correo"
                type="email"
                className="form-control"
                placeholder="Ingresa tu correo"
                value={correo}
                onChange={(event) => setCorreo(event.target.value)}
            />
            </div>

            <div className="mb-3">
            <label className="form-label text-white" htmlFor="contrasena">
                Password
            </label>
            <input
                id="contrasena"
                type="password"
                className="form-control"
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(event) => setContrasena(event.target.value)}
            />
            </div>

            <div className="mb-4">
            <label className="form-label text-white" htmlFor="confirmContrasena">
                Confirmar contraseña
            </label>
            <input
                id="confirmContrasena"
                type="password"
                className="form-control"
                placeholder="Confirmar contraseña"
                value={confirmContrasena}
                onChange={(event) => setConfirmContrasena(event.target.value)}
            />
            </div>

            <button type="submit" className="btn btn-primary w-100">
            Registrarse
            </button>
        </form>
        </div>
    );
};

export default RegisterPage;
