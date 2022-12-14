// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// Components
import NavBar from "./components/NavBar/NavBar.js";
import CartSidebar from "./components/Cart/CartSidebar.js";
import ItemListContainer from "./components/ItemList/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.js";
import Footer from "./components/Footer/Footer.js";
import Checkout from "./components/Checkout/Checkout.js";
import Loader from "./components/Loader/Loader.js";
// Contexts
import CartProvider from "./context/CartProvider.js";
import BasicProvider from "./context/BasicProvider.js";
import { BasicContext } from "./context/BasicContext.js";

function App() {
	// Loader
	const [loading, setLoading] = useState(false);

	return (
		<BrowserRouter>
			<BasicProvider>
				{loading && <Loader />}
				<CartProvider>
					<NavBar />
					<CartSidebar />
					<Routes>
						<Route path="graymarket" element={<ItemListContainer loader={setLoading} />} />
						<Route path="category/:categoryId" element={<ItemListContainer loader={setLoading} />} />
						<Route path="item/:itemId" element={<ItemDetailContainer loader={setLoading} />} />
						<Route path="checkout" element={<Checkout loader={setLoading} />} />
						<Route path="search" element={<ItemListContainer loader={setLoading} />} />
					</Routes>
				</CartProvider>
			</BasicProvider>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
