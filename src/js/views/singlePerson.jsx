import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams} from "react-router-dom";


export const SinglePerson = ()  => { 
    const { store, actions } = useContext(Context)

        const params = useParams();
        console.log(params);
        const [CharacterDetails, setCharacterDetails] = useState([]);

    const getCharacterDetails = async () => {
        const response = await fetch(
          `https://www.swapi.tech/api/people/${params.id}`
        );
        const data = await response.json();
        const details = data;
        console.log(details);
        setCharacterDetails(details.result.properties);
      };
      getCharacterDetails();
      console.log(CharacterDetails);

    return (
        
        <div className="card bg-dark mt-5" style={{maxwidth: '800px'}}>
        <div className="row g-0">
        
          <div className="col-md-4">
                <img  src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} />
            </div>
           
            
            <div className="col-md-8">
                    <div className="card-body"  >
                        <h5 className="card-title">{CharacterDetails.name}</h5>
                        <p className="card-text">Vivamus mi urna, varius sed odio ac, malesuada commodo erat. Etiam bibendum, felis in convallis finibus, eros massa rutrum purus, nec congue purus neque a diam. Sed vitae nunc maximus, posuere libero semper, lacinia erat. Vivamus bibendum dapibus leo, sed luctus nunc tristique vel. Aenean ultrices pellentesque purus at sagittis. Ut porta tincidunt maximus. Vivamus ullamcorper condimentum lectus eu feugiat. Nulla lobortis tempor metus a sollicitudin. Donec convallis posuere massa, et facilisis metus bibendum a. Suspendisse a purus purus. Mauris faucibus velit libero. Donec mollis odio tortor. Vestibulum ac vulputate tortor. Sed semper sapien nulla, a mattis enim feugiat malesuada.</p>
                    </div>

                    <div className="container text-center">
                        <div className="row">
                            <div className="col ">Date of birth: {CharacterDetails.birth_year}</div>
                            <div className="col">Eye color: {CharacterDetails.eye_color}</div>
                            <div className="col">Gender: {CharacterDetails.gender}</div>
                            <div className="col">Hair color: {CharacterDetails.hair_color}</div>
                        </div>
                    </div>
                </div> 
        </div>
      </div>
    
    )
}; 