import React, {useState} from "react";
import Navbar from "../src/components/navbar";
import Home from "../src/components/home";
import Footer from "../src/components/footer";
import RegisterPage from "../src/components/register";
import LoginPage from "../src/components/login";

const App = () => {
  const [view, setView] = useState("home");
  // const [token, setToken] = useState(false); //cumplira la funcion de realizar una autenticacion real
  const renderView = () => {
    switch (view) {
      case "login":
        return <LoginPage/>;
      case "register":
        return <RegisterPage/>;
      default:
        return <Home/>;
    }
  };

  return (
    <>
      {/* <Navbar setView={setView} token={token}/> //cumplira la funcion de realizar una autenticacion real*/} 
      <Navbar setView={setView}/>
      <main className="container my-4">
        {renderView()}
      </main>
      <Footer/>
    </>
  );
};

export default App;