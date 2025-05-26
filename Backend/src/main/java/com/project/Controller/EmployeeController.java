package com.project.Controller;

import com.project.Entity.Employee;
import com.project.service.Employeeservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    Employeeservice emloyeeservice;


    @PostMapping("/employee")
    public Employee postemployee(@RequestBody Employee employee){
        return emloyeeservice.Postemployee(employee);
    }

}
