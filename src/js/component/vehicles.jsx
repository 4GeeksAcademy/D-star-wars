import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext, useEffect } from "react";
import { BookmarkStar } from "react-bootstrap-icons";

export const Vehicles = (props) => {

    const { store, actions } = useContext(Context)
    
    return (
      <div>
        <div className="container"> 
            <div className="row">
            <div className="col">
                    <div className="card" style={{width: "200px", height: "500px", background: "black"}}>
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.index + 1}.jpg`} /> 
                    <div className="card-body">
                      <h5 className="card-title">{props.name}</h5>
                      <p className="card-text"> Model: {props.model} </p> 
                      <p className="card-text"> Passengers: {props.passengers} </p>
                      <p className="card-text"> Cargo capacity: {props.cargo_capacity} </p>
                    <div className="low-card">

                    <Link to={`/singleVehicle/${props.id}`}> 
                      <button type="button" className="btn btn-outline-warning mx-3">Read more</button>
                    </Link>
                    
                      <BookmarkStar className="btn-outline-warning" size={30}
                          onClick={() => actions.newFavorite(props.name) }/>  
                          
                    </div>
                    </div>
                  </div>
                </div> 
             </div> 
          </div> 
      </div>
    );
  };
  