import Link from "next/link"
import { getLastReviews } from "@/lib/review"


export default async function Homepage(){
    const lastReviews = await getLastReviews()

    return (
        <>
            <div className='wrapper'>
                <h2 className="text-white mt-5 text-2xl">Bienvenue à la Filmothèque</h2>
                <div className="flex justify-center items-center">
                    <img src="./images/cinema.png" alt="Image cinema" className="mt-3 mb-3"/>
                </div>
                <h3 className="text-white mt-2 text-2xl">Nos derniers films</h3>
                <div className="flex flex-wrap justify-center items-center">
                    {lastReviews.map((review)=>(
                        <div key={review.title} className="carte">
                            <Link href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://image.tmdb.org/t/p/w500/${review.poster_path}`} alt={`image de ${review.title}`}/>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{review.title}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{review.overview}</p>
                                </div>
                            </Link>

                        </div>
                        
                    ))}
                </div>
            </div>
        </>
    )
}
