import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark border-bottom border-dark mb-3 " data-bs-theme="dark">
			<Link to="/">
					<div className="logo-image mt-3 ms-3">
							<img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-4-logo-png-transparent.png" className="img-fluid"/> 
					</div>
			</Link>

	
			<div className="ml-auto">
			<form className="d-flex" role="search">
				<input className="form-control me-2 mb-2" style={{ width: '150px' }} type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-warning mb-2 me-3 p-2"  type="submit">Search</button>
			</form>
				<Link to="/demo">
					<button className="btn btn-warning mb-5 me-3">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
