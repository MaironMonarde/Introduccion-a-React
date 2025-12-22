import React, {useState} from "react";
import Navbar from "../src/components/navbar";
import Home from "../src/components/home";
import Footer from "../src/components/footer";
import RegisterPage from "../src/components/register";
import LoginPage from "../src/components/login";
import Cart from "../src/components/cart";

const App = () => {
  const [view, setView] = useState("home");
  const [token, setToken] = useState(false);
  const renderView = () => {
    switch (view) {
      case "login":
        return <LoginPage/>;
      case "register":
        return <RegisterPage/>;
      case "cart":
        return <Cart/>;
    }
  };

  return (
    <>
      <Navbar setView={setView} token={token}/> 
      <main className="container my-4">
        {renderView()}
      </main>
      <Home/>
      <Footer/>
    </>
  );
};

export default App;