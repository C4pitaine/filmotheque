'use client'
import { getResearch } from "@/lib/review"

export default async function ReviewPage( {params: {id}}){
    const review = await getResearch(id)
    console.log(review)
    return(
        <>
            <div className='wrapper'>
                
            </div>
        </>
    )

}