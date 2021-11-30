import React, {useEffect, useState} from 'react'

function App() {

    const [images, setImages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((resp) => resp.json())
            .then((data) => {
                setImages(data.message)
                setIsLoaded(true)
            })

    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return <img src={images} alt="A Random Dog"/>
}

export default App

