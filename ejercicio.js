/*Vista maestro obtenida a partir de el resultado obtenido de una API (se debe mostrar una imágen, un nombre y otro(s) dato(s))
¿Qué es una vista maestro?
Una vista maestro es un conjunto de tarjetitas (HTML) mostradas con flex (Una cuadrícula con los elementos del fetch)
APIS RECOMENDADAS
https://pokeapi.co/
https://swapi.dev/
https://rickandmortyapi.com
https://www.football-data.org/
https://docs.openaq.org/
https://www.septastats.com/api
https://sunrise-sunset.org/api
https://anapioficeandfire.com/
https://source.unsplash.com/
https://randomuser.me/api
*/
fetch("https://randomuser.me/api/?results=10")
.then((response)=>{
    return response.json();
})
.then((personajes)=>{
    console.log(personajes.results)
    personajes.results.map((personaje) => {
        console.log(personaje.picture.large)
        let tarjeta = `
        <div class="tarjeta1">
            <figure>
                <img src="${personaje.picture.large}">
                <figcaption></figcaption>
            </figure> 
            <div class="datos">
            <p>gender: ${personaje.gender}</p>
            <p>name: ${personaje.name.title} ${personaje.name.first} ${personaje.name.last}</p>
            <p>age: ${personaje.dob.age}</p>
            <p>email:${personaje.email}  </p>

            <p>location: ${personaje.location.city} ${personaje.location.coordinates.latitude}  ${personaje.location.coordinates.longitude}</p>
            </div>
        </div>
        `;
        let container = document.getElementById("container");
        container.innerHTML += tarjeta;
        
    })
})

.catch(e=>console.log(e))
