import { useParams } from "react-router";

function About() {
    let { id } = useParams();

    return (
        <div>
            <h1>About Us</h1>
            <p>Id : {id}</p>
        </div>
    )
}
export default About;