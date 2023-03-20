/**
 * Fetch -> Nos permite buscar informacion de otros servidores
 *
 * Recomendacion de Octavio: thunder client
 * Recomendacion de Jose: Thunder Client
 *
 * Postman, Insomnia o , req.bin.
 *
 * METODOS DE "REST API"
 * GET -> Nos permite buscar informacion de la API
 * POST -> Para enviar informacion a la API(Normalmente usado para crear)
 * PUT -> Se usa para modificar Completamente elementos de la API
 * PATCH -> Se usa para modificar parcialmente elementos de la API
 * DELETE -> Se usa para borrar Elementos de la API
 *
 * URL BASE o Base Url: https://rickandmortyapi.com/api -> el servidor a donde queremos buscar informacion
 * Endpoint:  Son los puntos de esa API que nos permiten usar la informacion
 * /character -> Endpoint que nos devuelve una lista de personajes
 * /location -> Endpoint que nos devuelve una lista de locaciones
 * /episode -> Endpoint que nos devuelve una lista de episodios
 */
//  https://rickandmortyapi.com/api

// Fetch es la funcion que nos permite buscar informacion en APIS
let characterEndpoint = "https://rickandmortyapi.com/api/character";

// Response.json traducimos la respuesta de x notacion a JSON(Javascript Object Notation)
console.log();
fetch(characterEndpoint)
  .then((response) => response.json())
  .then((data) => console.log(data));

/**
 * fetch(endpoint)
    .then(response => response.json())
    .then(data => console.log(data));
 */
