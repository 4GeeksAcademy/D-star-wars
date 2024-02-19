import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { SinglePerson } from "./views/singlePerson.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SinglePLanet } from "./views/singlePlanet.jsx";
import { SingleVehicle } from "./views/singleVehicle.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/singlePerson/:id" element={<SinglePerson /> }/>
						<Route path="/singlePlanet/:id" element={<SinglePLanet/> }/> 
						<Route path="/singleVehicle/:id" element={<SingleVehicle /> }/> 
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
