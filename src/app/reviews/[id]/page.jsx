import { getFilm } from "@/lib/review"
import Image from "next/image"
import moment from "moment"

export default async function ReviewPage( {params: {id}}){
    const review = await getFilm(id)
    
    const formatDate = (date) => moment(date).format('DD-MM-YYYY')

    const genres = review.genres

    return(
        <>
            <div className='wrapper'>
                <div className="flex flex-col md:flex-row text-white">
                    {review.poster_path === null ? <Image width="250" height="150"  className="filmImage" src="http://placehold.it/300x450" alt="Image null"/> : <Image width="250" height="150" className="filmImage" src={`https://image.tmdb.org/t/p/w500/${review.poster_path}`} alt={`image de ${review.title}`} />}
                    
                    <div className="filmDescription">
                        <h5 className="mb-5 text-4xl">{review.title}</h5>
                        <p className="mb-4">{review.overview}</p>
                        <div className="text-xl my-4">Date de sortie : {formatDate(review.release_date)}</div>
                        <div className="text-xl">Note moyenne : {(review.vote_average).toFixed(1)}</div>
                        <div className="flex mt-8">
                            <div className="me-2">
                                Genres :
                            </div>
                            {genres.map((genre)=>(
                                <div key={genre.id} className="me-4">
                                    {genre.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}