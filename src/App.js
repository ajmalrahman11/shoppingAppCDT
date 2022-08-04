import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
