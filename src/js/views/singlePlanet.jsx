import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams} from "react-router-dom";


export const SinglePLanet = ()  => { 
    const { store, actions } = useContext(Context)

        const params = useParams();
        console.log(params);
        const [planetDetails, setPlanetDetails] = useState([]);

    const getPlanetDetails = async () => {
        const response = await fetch(
          `https://www.swapi.tech/api/planets/${params.id}`
        );
        const data = await response.json();
        const details = data;
        console.log(details);
        setPlanetDetails(details.result.properties);
      };
      getPlanetDetails();
      console.log(planetDetails);

    return (
        
        <div className="card bg-dark mt-5" style={{maxwidth: '800px'}}>
        <div className="row g-0">
        
          <div className="col-md-4">
                <img  src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} />
            </div>
           
            
            <div className="col-md-8">
                    <div className="card-body"  >
                        <h5 className="card-title">{planetDetails.name}</h5>
                        <p className="card-text">Vivamus mi urna, varius sed odio ac, malesuada commodo erat. Etiam bibendum, felis in convallis finibus, eros massa rutrum purus, nec congue purus neque a diam. Sed vitae nunc maximus, posuere libero semper, lacinia erat. Vivamus bibendum dapibus leo, sed luctus nunc tristique vel. Aenean ultrices pellentesque purus at sagittis. Ut porta tincidunt maximus. Vivamus ullamcorper condimentum lectus eu feugiat. Nulla lobortis tempor metus a sollicitudin. Donec convallis posuere massa, et facilisis metus bibendum a. Suspendisse a purus purus. Mauris faucibus velit libero. Donec mollis odio tortor. Vestibulum ac vulputate tortor. Sed semper sapien nulla, a mattis enim feugiat malesuada.</p>
                    </div>

                    <div className="container text-center">
                        <div className="row">
                            <div className="col ">Climate: {planetDetails.climate}</div>
                            <div className="col">Diameter: {planetDetails.diameter}</div>
                            <div className="col">Orbital Period: {planetDetails.orbital_period}</div>
                            <div className="col">Population: {planetDetails.population}</div>
                        </div>
                    </div>
                </div> 
        </div>
      </div>
    
    )
}; 