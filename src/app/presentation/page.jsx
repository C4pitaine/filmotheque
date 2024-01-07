'use client'
import { getResearch } from "@/lib/review"
import Link from "next/link"

export default async function presentation() {

    const research = await getResearch("")
    console.log(research)
    return(
        <>
            <h1>Présentation</h1>
            
        </>
    )
}