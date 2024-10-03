import { faker } from "@faker-js/faker"

const bio = () => {
    faker.person.bio()
}

const About = () => {
    return(
    <div>
        <h1>About Us</h1>

        <div>
            <h5>Kieran</h5>
            <p>{bio()}</p>
        </div>
        <div>
            <h5>John-Paul</h5>
            <p>{bio()}</p>
        </div>
        <div>
            <h5>Rukayat</h5>
            <p>{bio()}</p>
        </div>
    </div>
)}

export default About