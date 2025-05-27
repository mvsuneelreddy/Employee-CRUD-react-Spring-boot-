package com.project.Controller;

import com.project.Entity.Employee;
import com.project.service.Employeeservice;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.List;

@RestController
public class EmployeeController {
    @Autowired
    Employeeservice emloyeeservice;


    @PostMapping("/employee")
    public Employee postemployee(@RequestBody Employee employee){
        return emloyeeservice.Postemployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getallemployees(){
        return emloyeeservice.getallemployees();
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteemployee(@PathVariable Long id){
        try {
            emloyeeservice.deleteemployee(id);
            return new ResponseEntity<>("Employee with id " + id + " deleted sucessfully " , HttpStatus.OK);
        }
        catch (EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }

    }

}
