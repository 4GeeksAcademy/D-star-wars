import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { People } from "../component/people.jsx"
import { Planets } from "../component/planets.jsx";

export const Home = () => { 
	const { store, actions } = useContext(Context)


	return (
<div className="container"> 
	<div className="characters">
			<h1 className="m-5">Characters</h1>  
		<div className="container d-flex flex-row overflow-scroll" style={{height:"600px", width:"100%" }}>

		{ store.people.map((people, index) => 
		 <People id={people.id} name={people.name} index={index}  birth_year={people.birth_year}  eye_color={people.eye_color} gender={people.gender} key={index} />
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
</div>
	) 
};
