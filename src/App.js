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

	// Add To Cart
	const [selectedProductList, setSelectedProductList] = useState([]);
	const [cartItems, setCartItems] = useState(0);

	// Add To Bucket List
	const [addedToBucket, setAddedToBucket] = useState([]);
	const [bucketList, setBucketList] = useState(0);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => {
				setProductlist(data);
			});
	}, []);
	const addToCart = (id) => {
		cartBucketMain(
			id,
			selectedProductList,
			setSelectedProductList,
			setCartItems
		);
	};

	const addToBucket = (id) => {
		cartBucketMain(id, addedToBucket, setAddedToBucket, setBucketList);
	};

	// Main Functionaly of Bucket List & Add To Cart
	const cartBucketMain = (id, selectedState, setSelectedState, setCart) => {
		let selected = productlist.find((service) => service.id === id);
		let selectedList = [...selectedState];
		const exists = selectedList.find((item) => item.id === id);
		if (!exists) {
			selectedList = [...selectedState, selected];
		} else {
			selectedList.splice(selectedList.indexOf(exists), 1);
		}
		setSelectedState(selectedList);
		setCart(selectedList.length);
	};
	return (
		<Context.Provider
			value={{
				productlist,
				cartItems,
				bucketList,
				selectedProductList,
				addedToBucket,
				addToBucket,
				addToCart,
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
				<Route path="/cart/:id" element={<Cart />}></Route>
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
