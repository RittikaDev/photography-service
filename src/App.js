import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import About from "./Pages/About/About";
import NotFound from "./Pages/Login/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Banner from "./Pages/Home/Banner/Banner";
import Wrapper from "./Pages/Login/Login/Wrapper";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Banner />}></Route>
				<Route path="/banner" element={<Banner />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route
					path="/services/:id"
					element={
						<RequireAuth>
							<Checkout />
						</RequireAuth>
					}
				></Route>
				<Route path="/blogs" element={<Blogs />}></Route>
				<Route path="/login" element={<Wrapper />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>

			<Footer />
			<ToastContainer
				position="top-center"
				autoClose={7000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
	);
}

export default App;
