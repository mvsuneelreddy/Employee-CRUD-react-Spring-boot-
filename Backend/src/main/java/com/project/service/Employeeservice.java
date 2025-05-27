package com.project.service;

import com.project.Entity.Employee;
import com.project.repository.Employeerepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Employeeservice {

    @Autowired
    private  Employeerepo employeerepo;

    public Employee Postemployee(Employee employee){
        return employeerepo.save(employee);
    }

    public List<Employee> getallemployees(){
        return employeerepo.findAll();
    }

    public void deleteemployee(Long id){
        if (!employeerepo.existsById(id)){
            throw new EntityNotFoundException("Employee with id " + id + " not found");
        }
        employeerepo.deleteById(id);
    }


    public Employee getElementbyId(Long id) {
        return employeerepo.findById(id).orElse(null);
    }

    public void updateEmployee(Long id, Employee employee) {
        if (!employeerepo.existsById(id)){
            throw new EntityNotFoundException("Employee with id " + id + " not found");
        }
        employee.setId(id);
        employeerepo.save(employee);
    }
}
