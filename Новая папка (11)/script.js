// const handleResponse = () => {
//     fetch("https://swapi.dev/api/people/")
//         .then(response => response.json())
//         .then(data => console.log(data.resulte))
//         .catch(error => console.log(error))
// }
//
// handleResponse()

const handleResponse = () => {
    fetch("https://swapi.dev/api/people/1/")
        .then(response => response.json())
        .then(data => {
            fetch("https://swapi.dev/api/vehicles/14/")
                .then(response => response.json())
                .then(carle => {
                    fetch("https://swapi.dev/api/starships/12")
                        .then(response => response.json())
                        .then(starships => alert(`hello ${data.name}, ur height ${data.height}, ur vehicle ${carle.name}, ur starship ${starships.model}`))
                })
        })
        .catch(error=> console.log(error))
}
handleResponse()