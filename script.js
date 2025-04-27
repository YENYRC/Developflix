
import peliculas from './peliculas.js';

console.log(peliculas);

function mostrarPeliculas(contenedorID, generoID) {
   const contenedor = document.getElementById(contenedorID);
   const peliculasGenero = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoID));
    

    peliculasGenero.forEach(pelicula => {
      contenedor.innerHTML += template(pelicula.poster_path, pelicula.title)
            
    });

  
  }

  function template(imagen, titulo) {
    return `
        <div class="pelicula">
            <img src="https://image.tmdb.org/t/p/w200${imagen}" alt="${titulo}">
            <h2>${titulo}</h2>
        </div>
    `;
}


const generos = [28, 53, 12];

generos.forEach(elemento => {
    mostrarPeliculas(`genero-${elemento}`, elemento);

});
