import React from "react";
import Navbar from "../src/components/navbar";
import Home from "../src/components/home";
import Footer from "../src/components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container my-4">
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;