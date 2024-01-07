'use client'
import { getFilm } from "@/lib/review"

export default async function ReviewPage( {params: {title}}){
    const review = await getFilm(title)
    console.log(review)
    return(
        <>
            <div className='wrapper'>
                {review.title}
            </div>
        </>
    )

}