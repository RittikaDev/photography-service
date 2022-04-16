import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Banner from "./Pages/Banner/Banner";
import Footer from "./Pages/Shared/Footer/Footer";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}

export default App;
