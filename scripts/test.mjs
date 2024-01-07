const API_KEY = "2e2c61ff85593ad2cd79c1bd46d0e7fa";

    var test = "Aquaman and"
    const research = test.replace(/ /g, "+")

    try {
        const response = await fetch("https://api.themoviedb.org/3/search/movie?query="+research+"&api_key="+ API_KEY);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();


        console.log(data.results) ;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }







