import React from 'react'
import './index.css'

function App(props) {
    console.log(props);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props);
    }

    return (
        <>
            <h1>Registration From</h1>
            <form className="inputForm" onSubmit={handleSubmit} >

                <input
                    type="text"
                    className="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={props.firstName}
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="text"
                    className="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={props.lastName}
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="text"
                    className="text"
                    name="age"
                    placeholder="Enter Age"
                    value={props.age}
                    onChange={props.handleChange}
                />
                <br />

                <label>
                    <input
                        type="radio"
                        className="radiobutton"
                        name="gender"
                        value="male"
                        checked={props.gender === 'male'}
                        onChange={props.handleChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        className="radiobutton"
                        name="gender"
                        value="female"
                        checked={props.gender === 'female'}
                        onChange={props.handleChange}
                    />
                    Female
                </label>
                <br />
                <label className="location-header" >Select Your Location</label>
                <br />
                <select
                    className="location-input"
                    name="location"
                    value={props.location}
                    onChange={props.handleChange}
                >
                    <option value=""  >--Please Choose a Location--</option>
                    <option value="Noida" >Noida</option>
                    <option value="Delhi" >Delhi</option>
                    <option value="Pune" >Pune</option>
                </select>
                <br />
                <br />
                <label className="course-title" >Course :</label>
                <br />
                <div className="course" >
                    <input
                        type="checkbox"
                        name="angular"
                        checked={props.angular}
                        onChange={props.handleChange}
                    />
                    <span>Angular</span>
                    <br />
                    <input
                        type="checkbox"
                        name="reactjs"
                        checked={props.reactjs}
                        onChange={props.handleChange}
                    />
                    <span>React Js</span>
                    <br />
                    <input
                        type="checkbox"
                        name="nodejs"
                        checked={props.nodejs}
                        onChange={props.handleChange}
                    />
                    <span>Node Js</span>
                </div>

                <button className="submit" type="submit" >Submit</button>
            </form>



            <hr />
            <div className="entered-info" >
                <h2>Entered Information</h2>
                <p>Your Name : {props.firstName} {props.lastName}</p>
                <p>Your Age : {props.age}</p>
                <p>Your Gender : {props.gender}</p>
                <p>Your Location : {props.location}</p>
                <p>Your Purchsed Courses : </p>
                <div className="course" >
                    <div>Angular : {props.angular ? "Yes" : "No"}</div>
                    <div>React Js : {props.reactjs ? "Yes" : "No"}</div>
                    <div>Node Js : {props.nodejs ? "Yes" : "No"}</div>
                </div>
            </div>
        </>
    );
}

export default App;