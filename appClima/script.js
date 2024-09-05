let consultarClima = async () => {
    let apiKey = '4741e6623bcaf9b7bbeac2f77cebf30f';
    let ciudadEntrada = document.getElementById('ciudadEntrada'); 
    let datosClima = document.getElementById('datosClima');

    let city = ciudadEntrada.value;
    console.log("Valor de mi ciudad:", city);

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        let json = await response.json();
        let logoClima = document.createElement('img');
        logoClima.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}.png`
        console.log(json)
        // Esperar la traducción antes de actualizar el DOM
        datosClima.innerHTML = `<h2>Ciudad / City: ${json.name}, ${json.sys.country}</h2>`
    
        datosClima.appendChild(logoClima)
        datosClima.innerHTML += `<h3>Clima / Weather: ${capitalizarCadaPalabra(json.weather[0].description)}</p>
                                 <h3>Temperatura / Temperature: ${Math.round(json.main.temp - 273.15) + "° C"}
                                 <h3>Humedad / Humidity: ${json.main.humidity}%</h3>
                                 <h3>Viento / Wind: ${json.wind.speed} m/s</h3>`
    } catch (error) {
        console.error('Error:', error);
        datosClima.innerHTML = `<p>Error al obtener los datos del clima. Verifica el nombre de la ciudad o intenta de nuevo.</p>`
    }
}

function capitalizarCadaPalabra(texto) {
    return texto
        .split(' ')                    
        .map(palabra =>                
            palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
        )
        .join(' ')
}
