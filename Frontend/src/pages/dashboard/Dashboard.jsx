import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap";


function Dashboard(){

    const [employees,setEmployees ] =useState([]);

    useEffect( () => {
        axios.get("http://localhost:8080/api/employees")
        .then(response => {
            console.log("received",response.data);
            setEmployees(response.data);
        })
        .catch(error => {
            console.error("Error Fetching Employees " , error);
    });
        
    } ,[]);
    
    return(
        <>
            
            <Container className="mt-5"> 
                <Row> 
                    <Col>
                    <h1 className="tect-center"> Employees </h1>
                    <Table striped bordered hover responsive >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) =>{
                                return(
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.department}</td>
                                    <td>
                                        <Button variant="outline-secondary"> Update </Button>
                                        <Button variant="outline-danger"> Delete </Button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </Table> 
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Dashboard
