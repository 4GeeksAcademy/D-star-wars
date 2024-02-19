const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: localStorage.getItem("people") && JSON.parse(localStorage.getItem("people")) || [],
			vehicles: localStorage.getItem("vehicles") && JSON.parse(localStorage.getItem("vehicles")) || [],
			planets: localStorage.getItem("planets") && JSON.parse(localStorage.getItem("planets")) || [],
			favorites: [],
		},


		actions: {

			getPeople: async () => {
				console.log("SEE ME FIRST")
				try {
					const resp = await fetch("https://www.swapi.tech/api/people/");
					if (!resp.ok) {
						throw Error(resp.statusText);
					}
					const peopleList = await resp.json();
					console.log(peopleList, "SEE ME");
				
					for (let details of peopleList.results) {
						console.log(details, "NOW YOU SEE ME ? ")
						const detailsResponse = await fetch(details.url);
						const detailsPeople = await detailsResponse.json();
						console.log(detailsPeople);
						setStore({ people: [...getStore().people, detailsPeople.result] });
						console.log(getStore().people);
					}
					localStorage.setItem("people", JSON.stringify(getStore().people));
				}

				catch (error) {
					console.log(error);
				}
			},



			getVehicles: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/vehicles/");
					if (!resp.ok) {
						throw Error(resp.statusText);
					}
					const vehiclesList = await resp.json();
					console.log(vehiclesList);

					for (let details of vehiclesList.results) {
						const detailsResponse = await fetch(details.url);
						const detailsVehicles = await detailsResponse.json();
						console.log(detailsVehicles);
						setStore({ vehicles: [...getStore().vehicles, detailsVehicles.result] }); // Concatenate new vehicle details
						console.log(getStore().vehicles); // Log updated vehicles
					}
					localStorage.setItem("vehicles", JSON.stringify(getStore().vehicles)); // Store updated vehicles in localStorage
				} catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/planets/");
					if (!resp.ok) {
						throw Error(resp.statusText);
					}
					const planetsList = await resp.json();
					console.log(planetsList);

					for (let details of planetsList.results) {
						const detailsResponse = await fetch(details.url);
						const detailsPlanets = await detailsResponse.json();
						console.log(detailsPlanets);
						setStore({ planets: [...getStore().planets, detailsPlanets.result] }); // Concatenate new planet details
						console.log(getStore().planets); // Log updated planets
					}
					localStorage.setItem("planets", JSON.stringify(getStore().planets)); // Store updated planets in localStorage
				} catch (error) {
					console.log(error);
				}
			},

			newFavorite: (index) => { 
				// const store = getStore();
				let addFavorite = getStore().favorites
				addFavorite.push(index)
				addFavorite = [...new Set(addFavorite)]
			setStore ({favorites : addFavorite  })


			}, 


			removeFromFavorite: (index) => {
				let updatedFavorites = getStore().favorites
				updatedFavorites.splice(index, 1)
				setStore({favorites : updatedFavorites})

			}

				
		}

	}
};



// getPlanets: async () => {
// 	const store = getStore();
// 	if (store.planets <= 0) {
// 	  const response = await fetch(store.endpoint + "planets");
// 	  const planetsList = await response.json();
// 	  console.log(planetsList.results);
// 	  for (let details of planetsList.results) {
// 		const detailsResponse = await fetch(details.url);
// 		const detailsPlanet = await detailsResponse.json();
// 		console.log(detailsPlanet);
// 		setStore({ planets: [...store.planets, detailsPlanet.result] });
// 		console.log(store.planets);
// 	  }
// 	  localStorage.setItem("planets", JSON.stringify(store.planets));
// 	}
//   },

export default getState;
