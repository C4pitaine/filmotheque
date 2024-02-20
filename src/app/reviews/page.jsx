'use client'
import { useEffect, useState } from 'react'
import { getDataResults } from '@/lib/review'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import Pagination from '../../../components/Pagination'

export default function Reviews() {

    const [inputValue,setInputValue] = useState("")
    const [reviews,setReviews] = useState([])

    const fetchReviews = async () =>{
        const data = await getDataResults("https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&api_key=")
        setReviews(data)
    }

    const [currentPage,setCurrentPage] = useState(1)

    useEffect(()=>{
        fetchReviews()
    },[])

    const handleChange = (e) =>{
        const value = e.currentTarget.value
        setInputValue(value)
        setCurrentPage(1)
    }

    const filteredFilms = reviews.filter(c =>
        c.title.toLowerCase().includes(inputValue.toLowerCase())
    )
    
    const handlePageChange = (page) =>{
        setCurrentPage(page)
    }

    const itemsPerPage = 10

    const paginatedFilms = Pagination.getData(filteredFilms,currentPage,itemsPerPage)

    const formatDate = (date) => moment(date).format("YYYY")

    return(
        <>
            <div className='wrapper'>
                <h1 className="text-white mt-2 text-2xl">Notre sélection</h1>
                <div>
                    <input type="text" onChange={handleChange} value={inputValue} placeholder='Recherche'id="inputSearchReviews" className='mt-3 mb-4 p-2 rounded'/>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                {reviews.length === 0 && (
                    <div className="flex items-center text-white">
                        <div className="me-3 text-lg">Chargement des films</div>
                        <Image width="50" height="50" src="/images/loading-gif.gif" alt="Gif Chargement" />
                    </div>
                )}
                    {paginatedFilms.map((review)=>(
                        <div key={review.id} className="carte">
                            <Link href={`/reviews/${review.id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <Image width="250" height="150" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://image.tmdb.org/t/p/w500/${review.poster_path}`} alt={`image de ${review.title}`}/>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{review.title}</h5>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Année de sortie : {formatDate(review.release_date)}</p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Note moyenne: {(review.vote_average).toFixed(1)}</p>
                                </div>
                            </Link>

                        </div>
                        
                    ))}
                </div>
            </div>
            {
                itemsPerPage < filteredFilms.length && 
                <Pagination 
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                length={reviews.length}
                onPageChanged={handlePageChange}
                />
            }
            
        </>
    )
}