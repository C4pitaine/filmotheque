import RechercheBarre from "../../../components/RechercheBarre";
import { getResearch } from "@/lib/review";
export default async function Recherche() {

    const review =  await getResearch("")
    return(
        <>
            <div className='wrapper'>
                <h4>Vous rechercher un film en particulier ?</h4>
                <RechercheBarre />
            </div>
        </>
    )

}