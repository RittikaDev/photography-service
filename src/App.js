import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Banner from "./Pages/Banner/Banner";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Banner></Banner>}></Route>
        <Route path="/services/:id" element={<Checkout></Checkout>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
