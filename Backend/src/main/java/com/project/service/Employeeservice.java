package com.project.service;

import com.project.Entity.Employee;
import com.project.repository.Employeerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Employeeservice {

    @Autowired
    private  Employeerepo employeerepo;

    public Employee Postemployee(Employee employee){
        return employeerepo.save(employee);
    }

}
