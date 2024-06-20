import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Form,Button,Container,Alert} from 'react-bootstrap';

const EmployeeForm = () => {
    const baseURL = "http://localhost:8080/employee";
    const navigate = useNavigate();
    const [enteredName, setName] = useState('');
    const [enteredRole, setRole] = useState('');

    const nameChangedHandler = (event) => {
        setName(event.target.value);
    };

    const roleChangeHandler = (event) => {
        setRole(event.target.value);
    };

    const submitActionHandler = (event) => {
        event.preventDefault();
        axios
        .post(baseURL,{
            name:enteredName,
            role:enteredRole
        })
        .then((response) => {
            alert("Employee "+enteredName + " added!");
            navigate("/read");
        }).catch(error => {
            alert("error===="+error);
        });
    };

    const cancelHandler = () => {
        //reset the values of input fields
        setName('');
        setRole('');
        navigate("/read");
    }

    return(
        <Alert varient="primary">
            <Container>
                <Form onSubmit={submitActionHandler}>
                    <Form.Group controlId="form.Name">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" value={enteredName} onChange={nameChangedHandler}
                        placeholder='Enter User Name' required/>
                    </Form.Group>
                    <Form.Group controlId="form.Role">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" value={enteredRole} onChange={roleChangeHandler}
                        placeholder='Enter Role' required/>
                    </Form.Group>
                    <br></br>
                    <button type='submit'>Add Employee</button>
                    &nbsp;&nbsp;&nbsp;
                    <button type='submit' onClick={()=>cancelHandler()}>Cancel</button>
                </Form>
            </Container>
        </Alert>
    );
}
export default EmployeeForm;