import { getFilm } from "@/lib/review"
import Image from "next/image"
import moment from "moment"

export default async function ReviewPage( {params: {id}}){
    const review = await getFilm(id)
    
    const formatDate = (date) => moment(date).format('DD-MM-YYYY')

    return(
        <>
            <div className='wrapper'>
                <div className="flex flex-col md:flex-row text-white">
                    <Image width="250" height="150" className="filmImage" src={`https://image.tmdb.org/t/p/w500/${review.poster_path}`} alt={`image de ${review.title}`} />
                    <div className="filmDescription">
                        <h5 className="mb-3 text-2xl">{review.title}</h5>
                        <p className="mb-3">{review.overview}</p>
                        <div className="mb-3">Date de sortie : {formatDate(review.release_date)}</div>
                        <div>Note moyenne : {(review.vote_average).toFixed(1)}</div>
                    </div>
                </div>
            </div>
        </>
    )

}