import {useEffect, useState} from 'react'
import { faker } from '@faker-js/faker';

const Home = () => {
    const [image, setImage] = useState([]);

    const fetchImage = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');

        const data = await response.json();
        for (let i=0; i < data.length; i++) {
            data[i].catName = faker.person.fullName()
            data[i].catPrice = Math.ceil(Math.random() * 1000)
        }
        setImage(data);
        console.log(data)
    }
    useEffect(() => {
        fetchImage()
        },[])
    return (
        <div className="petInfo">
            {image.map((catInfo, index) => {
                return (
                    <div key={index} className="petInfoList">
                    <h2>Name: {catInfo.catName}</h2>
                    <h3>Price: £{catInfo.catPrice}</h3>
                    <img src={catInfo.url}/>
                    </div>
                )
            })}
        </div>
    )   
}

export default Home;