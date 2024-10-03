import {useState} from 'react'

const CatImage = () => {
    const [image, setImage] = useState([]);

    const fetchImage = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');

        const data = await response.json();
        setImage(data);
    }
    
}

export default CatImage;