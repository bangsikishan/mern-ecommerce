import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App;