import Link from "next/link"
import { getLastReviews } from "@/lib/review"
import Image from "next/image"

export default async function Homepage(){
    const lastReviews = await getLastReviews()

    return (
        <>
            <div className='wrapper'>
                <h2 className="text-white mt-5 mb-5 text-2xl">Bienvenue à la Filmothèque - Ici vous trouverez les films que vous recherchez</h2>
                <div className="flex">
                    <h3 className="text-white mt-2 me-3 text-2xl">Nos derniers films ou</h3>
                    <Link href="/reviews" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Découvrir plus</Link>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    {lastReviews.map((review)=>(
                        <div key={review.title} className="carte">
                            <Link href={`/reviews/${review.title.replace(/ /g, "+")}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
