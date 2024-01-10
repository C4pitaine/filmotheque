'use client'
import { useState } from "react"

export default function RechercheBarre() {
    const [clicked,setClicked] = useState(false)
    const [inputValue,setInputValue] = useState('')

    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleClick = () =>{
        {setClicked(true)}
        // console.log(inputValue)
    }


    return (
        <>
            <input type="text" id="input" value={inputValue} onChange={handleChange}/>
            <button
                onClick={handleClick}
            >Rechercher</button>
        </>
    )
}