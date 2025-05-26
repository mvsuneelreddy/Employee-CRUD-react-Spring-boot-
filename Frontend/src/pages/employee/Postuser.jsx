import { useState } from "react"
import "./Postuser.css"
import { Button, Form } from "react-bootstrap"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Postuser(){

    const [formdata,setFormdata] =useState({

        name : "",
        email : "",
        phone : "",
        department : ""

    });

    const navigate =useNavigate();

    const handleInputChange = (e) => {
        const { name,value} =e.target;
        setFormdata({
            ...formdata,
            [name]:value,
        });
    };

    

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:8080/api/employee' , formdata)
        .then(response => {
            console.log("employee created" , response.data);
            navigate("/");
        })

        .catch(error => {
            console.error("Error saving employee" , error);
        });
        navigate("/")
        
    };

    return (
        <>
            <div className="center-form">
                <h1> Post New Employee </h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formbasicName">
                        <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formdata.name}
                        onChange={handleInputChange}
                        />
                        
                    </Form.Group>

                     <Form.Group controlId="formbasicName">
                        <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formdata.email}
                        onChange={handleInputChange}
                        />
                        
                    </Form.Group>



                     <Form.Group controlId="formbasicName">
                        <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter phone"
                        value={formdata.phone}
                        onChange={handleInputChange}
                        />
                        
                    </Form.Group>



                     <Form.Group controlId="formbasicName">
                        <Form.Control
                        type="text"
                        name="department"
                        placeholder="Enter department"
                        value={formdata.department}
                        onChange={handleInputChange}
                        />
                        
                    </Form.Group>

                    <Button variant="primary" type ="submit"> Post Employee </Button>
                </Form>
            </div>
        </>
    )
}

export default Postuser