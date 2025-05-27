import { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap"
import './UpdateUser.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateUser(){

    const navigate =useNavigate();

    const {id} =useParams();

    const [formdata,setFormdata] =useState({
    
            name : "",
            email : "",
            phone : "",
            department : ""
    
        });
    
    
        const handleInputChange = (e) => {
            const { name,value} =e.target;
            setFormdata({
                ...formdata,
                [name]:value,
            });
        };

        useEffect(()=>{
            axios.get(`http://localhost:8080/api/employee/${id}`)
            .then(response =>{
                setFormdata(response.data);
            })
            .catch(error =>{
                console.log(error);
            });
            
        },[id]);

        const handleSubmit = ((e)=>{
            e.preventDefault();
            axios.put(`http://localhost:8080/api/employee/${id}` , formdata)
            console.log("Sucess Updating the Employee");
            navigate("/")
            .catch(error => {
                console.log(error);
            });
        });


    return(
        <>
            <>
            <div className="center-form">
                <h1> Edit Employee </h1>
                <Form onSubmit={handleSubmit} >
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

                    <Button variant="primary" type ="submit"> Edit Employee </Button>
                </Form>
            </div>
        </>
        </>
    )
}


export default UpdateUser;