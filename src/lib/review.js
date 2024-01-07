const API_KEY = "2e2c61ff85593ad2cd79c1bd46d0e7fa";

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

export async function getLastReviews() {
    const lastReviews = await getReviews()

    const tabLastReviews= [lastReviews[0],lastReviews[1],lastReviews[2],lastReviews[4]]
    return tabLastReviews
}