const API_KEY = "2e2c61ff85593ad2cd79c1bd46d0e7fa"; // clé d'authentification de l'API

/**
 * Permet d'afficher sur la HomePage les derniers films 
 */
export async function getLastReviews(url) {
    const lastReviews = await getDataResults(url+API_KEY)

    const tabLastReviews= [lastReviews[0],lastReviews[1],lastReviews[2],lastReviews[4]]
    return tabLastReviews
}

/**
 * Permet de récupérer les données de l'api ( plusieurs ou un film(s) )
 */
export async function getDataResults(url){
    const urlKey = url+API_KEY
    try {
        const response = await fetch(urlKey);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

/**
 * Permet de récupérer les données de l'api ( un seul film )
 */
export async function getData(url){
    const urlKey = url+API_KEY
    try {
        const response = await fetch(urlKey);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
