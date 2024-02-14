import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { People } from "../component/people.jsx"
import { Planets } from "../component/planets.jsx"
import { Vehicles } from "../component/vehicles.jsx";

export const Home = () => { 
	const { store, actions } = useContext(Context)


	return (
<div className="container"> 
	<div className="characters">
			<h1 className="m-5">Characters</h1>  
		<div className="container d-flex flex-row overflow-scroll" style={{height:"600px", width:"100%" }}>

		{ store.people.map((people, index) => 
		 <People id={people.uid} name={people.properties.name} index={index}  birth_year={people.properties.birth_year}  eye_color={people.properties.eye_color} gender={people.properties.gender} key={index} />
) }
		</div> 
	</div>

	<div className="planets">
			<h1 className="m-5">Planets</h1>  
		<div className="container d-flex flex-row overflow-scroll" style={{height:"600px", width:"100%" }}>

		{ store.planets.map((planets, index) => 
			
		<Planets id={planets.uid} name={planets.properties.name} index={index} population={planets.properties.population} climate={planets.properties.climate} gravity={planets.properties.gravity} key={index} /> ) }
			
		
		</div> 
	</div>

	<div className="vehicles">
			<h1 className="m-5">Vehicles</h1>  
		<div className="container d-flex flex-row overflow-scroll" style={{height:"600px", width:"100%" }}>

		{ store.vehicles.map((vehicles, index) => 
		<Vehicles id={vehicles.uid} name={vehicles.properties.name} index={index} model={vehicles.properties.model} passengers={vehicles.properties.passengers} cargo_capacity={vehicles.properties.cargo_capacity} key={index} /> ) }
			
		
		</div> 
	</div>

</div>


	) 
};
