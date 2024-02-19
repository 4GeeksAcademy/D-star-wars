import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BookmarkStar } from "react-bootstrap-icons";

export const People = (props) => {
    const { store, actions } = useContext(Context)

  
        return (
          <div>
            <div className="container"> 
                <div className="row">
                <div className="col">
                        <div className="card" style={{width: "200px", height: "500px", background: "black"}}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.index + 1}.jpg`} /> 
                        <div className="card-body">
                          <h5 className="card-title">{props.name}</h5>
                          <p className="card-text"> Birth year: {props.birth_year} </p>
                          <p className="card-text"> Eye color: {props.eye_color} </p> 
                          <p className="card-text"> Gender: {props.gender} </p>
                        <div className="low-card">

                          <Link to={`/singlePerson/${props.id}`}> 
                          <button type="button" className="btn btn-outline-warning mx-3">  Read more</button>
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
      


  