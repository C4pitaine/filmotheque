const API_KEY = "2e2c61ff85593ad2cd79c1bd46d0e7fa"

for(let i=500; i<510;i++){
        // Étape 1: Utilisation de l'API Fetch
    fetch("https://api.themoviedb.org/3/movie/"+i+"?api_key="+API_KEY)
    .then(response => {
        // Étape 2: Vérification du statut de la réponse
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Étape 3: Renvoi de la réponse sous forme de JSON
        return response.json();
    })
    .then(data => {
        // Étape 4: Traitement de la réponse
        // console.log(data)
        console.log(data) 
        //poster_path pour les images
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
    
}


