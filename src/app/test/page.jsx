'use client'
import { getId } from "@/lib/review"

export default async function Test( {params: {id}}){
    const review = await getId(id)
    console.log(review)
    return(
        <>
            <div className='wrapper'>
                
            </div>
        </>
    )

}