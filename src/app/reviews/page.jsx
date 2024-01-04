
import { getReviews } from '@/lib/review'

export default async function reviews() {

    const reviews = await getReviews()
    console.log(reviews)

    return(
        <>
            <h1>Reviews</h1>
            <div>
                
            </div>
            
            
        </>
    )
}