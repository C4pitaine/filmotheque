'use client'
import { useState } from "react";
import { getResearch } from "@/lib/review";
import Link from "next/link";
import Image from "next/image";

export default function Recherche() {
  const [inputValue, setInputValue] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);
  }

  const handleClick = async (e) =>{
    const fetchedReviews = await getResearch(inputValue);
    setReviews(fetchedReviews);
  }

  return (
    <>
      <div className='wrapper'>
        <h4 className="text-white mt-4 mb-3 text-2xl">Vous recherchez un film en particulier ?</h4>
        <div>
          <input type="text" onChange={handleChange} value={inputValue} id="researchInput" placeholder='Recherche' className='mt-3 mb-4 p-2 rounded'/>
          <button onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ms-3">Envoyer</button>
        </div>
        <div className="flex flex-wrap justify-center items-center">
        {reviews.map((review)=>(
            <div key={review.id} className="carte">
                <Link href={`/reviews/${review.id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <Image width="250" height="150"  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://image.tmdb.org/t/p/w500/${review.poster_path}`} alt={`image de ${review.title}`}/>
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
  );
}