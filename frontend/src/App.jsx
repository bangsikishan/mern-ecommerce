import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import AllProducts from "./components/AllProducts/AllProducts";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/shop" element={<AllProducts />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App;