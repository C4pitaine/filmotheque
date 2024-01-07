'use client'
import { getResearch } from "@/lib/review"

export default async function ReviewPage( {params: {title}}){
    const review = await getResearch(title)
    console.log(review)
    return(
        <>
            <div className='wrapper'>
                
            </div>
        </>
    )

}