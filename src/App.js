import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route to="/" component={Home} />
        <Route to="/product" component={Product} />
        <Route to="/about" component={About} />
        <Route to="/contact" component={Contact} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
