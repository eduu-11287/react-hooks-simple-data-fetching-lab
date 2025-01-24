// create your App component here
import React, {useState, useEffect } from 'react';
function App() {
    const [dogImage, setDogImage] =  useState(null);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
            setDogImage(data.message);
            setIsLoading(false);
        })
            .catch((error) => {
                console.log('Error fetching dog image:', error);
                setIsLoading(false);
            });
        }, []);
    
        return (
            <div>
                {isLoading ?(
                    <p>Loading...</p>
                ) : dogImage ?(
                    <img src={dogImage} alt="random dog image"/>
                ) : (
                    <p>Failed to load.</p>
                )}
            </div>
        );
}_

export default App;