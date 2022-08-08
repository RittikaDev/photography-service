import React, { createContext, useEffect, useState } from "react";
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
import Cart from "./Pages/Cart/Cart";

export const Context = createContext([]);
function App() {
	const [productlist, setProductlist] = useState([]);
	const [changeIconID, setChangeIconID] = useState([]);
	const [colorIconID, setColorIconID] = useState([]);
	const [selectedArray, setSelectedArray] = useState([]);
	const [selectedProductList, setSelectedProductList] = useState([]);
	const [cartItems, setCartItems] = useState(0);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => {
				setProductlist(data);
			});
	}, []);

	const addToCart = (id) => {
		const newIcons = [...changeIconID, id];
		const colorIcons = [...colorIconID, id];
		setChangeIconID(newIcons);
		setColorIconID(colorIcons);
		let selected = productlist.find((service) => service.id === id);
		selected.icon = "true";
		let selectedArr = [...selectedArray, selected];
		setSelectedArray(selectedArr);
		let selectedList = [...selectedProductList];
		const exists = selectedList.find((item) => item.id === id);
		if (!exists) {
			selectedList = [...selectedProductList, selected];
		} else {
			selectedList = [...selectedProductList];
		}

		setSelectedProductList(selectedList);
		setCartItems(selectedList.length);
	};
	return (
		<Context.Provider
			value={{
				productlist,
				addToCart,
				changeIconID,
				colorIconID,
				cartItems,
				selectedProductList,
			}}
		>
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
				<Route path="/cart" element={<Cart />}></Route>
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
		</Context.Provider>
	);
}

export default App;
