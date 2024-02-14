import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BookmarkStar } from "react-bootstrap-icons";

export const Planets = (props) => {
    const { store, actions } = useContext(Context)
      


        return (
          <div>
            <div className="container"> 
                <div className="row">
                <div className="col">
                        <div className="card" style={{width: "200px", height: "500px", background: "black"}}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${props.index + 1}.jpg`} /> 
                        <div className="card-body">
                          <h5 className="card-title">{props.name}</h5>
                          <p className="card-text"> Propulation: {props.population} </p>
                          <p className="card-text"> Climate: {props.climate} </p> 
                          <p className="card-text"> Gravity: {props.gravity} </p>
                        <div className="low-card">
                          <button type="button" className="btn btn-outline-warning mx-3">Read more</button>

                          <BookmarkStar className="btn-outline-warning" size={30}
                          onClick={() => actions.newFavorite(props) }/>  

                        </div>
                        </div>
                      </div>
                    </div> 
                 </div> 
              </div> 
          </div>
        );
      };
      
