const API_KEY = "2e2c61ff85593ad2cd79c1bd46d0e7fa"; // clé d'authentification de l'API

/**
 * Permet d'afficher les films sur la page Reviews
 */
export async function getReviews() {
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=" + API_KEY);

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
 * Permet de récupérer des films selons une recherche effectuer par l'utilisateur
 */
export async function getResearch(research) {

    const film = research.replace(/ /g, "+") // permet de remplacer les espaces par des +
    try {
        const response = await fetch("https://api.themoviedb.org/3/search/movie?query="+film+"&api_key="+ API_KEY);

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
 * Permet d'afficher sur la HomePage les derniers films 
 */
export async function getLastReviews() {
    const lastReviews = await getReviews()

    const tabLastReviews= [lastReviews[0],lastReviews[1],lastReviews[2],lastReviews[4]]
    return tabLastReviews
}