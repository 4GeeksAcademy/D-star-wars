import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar bg-dark border-bottom border-dark mb-3 " data-bs-theme="dark">
			<Link to="/">
					<div className="logo-image mt-3 ms-3">
							<img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-4-logo-png-transparent.png" className="img-fluid"/> 
					</div>
			</Link>
			<div className="d-flex justify-content-end">
				
				
				<div className="dropdown"> 
					<button className="btn btn-warning dropdown-toggle mb-5 me-3 " type="button" data-bs-toggle="dropdown" aria-expanded="false"> Favorites {store.favorites.length} </button>

					<ul className="dropdown-menu bg-dark">
					{
						store.favorites.map((favorites, index) =>
					
						{
							console.log(store.favorites, "CAN YOU SEE ME???")

							return (

   					 <li key={index}  className="dropdown-item" > <a className="dropdown-item " href="#" > 
					 <div> 
						 {favorites.name}
						</div> 
						 </a>
					</li>
						) })
					}

					</ul> 
				</div> 

			<div className="ml-auto">
			<form className="d-flex" role="search">
				<input className="form-control mb-5 me-3" style={{ width: '150px' }} type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-warning mb-5 me-3"  type="submit">Search</button>
			</form>
			</div>
			</div>
		</nav>
	);
};
