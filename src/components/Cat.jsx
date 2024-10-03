import { faker } from faker;
import './CatImage';


const catName = faker.person.fullName
const catPrice = Math.ceil(Math.random * 1000)

const Cat = ({catName, catImage}) => {
    return(
        <h2></h2>
    )
}



const CatItem = ({Cat, addToBasket}) => {
    return(
        <div className="petInfo">
        <h2>Name:{catName}</h2>
        <img>{CatImage}</img>
        <h3>Price:{catPrice}</h3>
        </div>

    )

}

export default Cat;