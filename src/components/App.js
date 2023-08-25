// create your App component here

import React, { useState, useEffect } from 'react'

export default function App() {
    const [dogPicture, setDogPicture] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then((data) => {
                setDogPicture(data.message)
            })
    }, [])

    if (!dogPicture) return <p>Loading next cute dog...</p>


    return <img src={dogPicture} alt="A very cute, but random dog" />


}
