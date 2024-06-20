package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.Employee;
import com.axis.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000") //Open for 3000 port
//@CrossOrigin() //Open for all ports
@RestController
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;
	
	//Get All Employees
	
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> getEmployees(){
		try {
			return new ResponseEntity<>(employeeService.getEmployees(),HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//Get the employee by ID
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long id){
		try {
			Employee empObj = employeeService.getEmployeeById(id);
			
			if(empObj != null) {
				return new ResponseEntity<>(empObj,HttpStatus.OK);
			}
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//Create new Employee
	
	@PostMapping("/employee")
	public ResponseEntity<Employee> newEmployee(@RequestBody Employee employee){
		Employee newEmployee = employeeService.createEmployee(employee);
		
		return new ResponseEntity<>(newEmployee,HttpStatus.OK);
	}
	
	//Update Employee by Id
	
	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id") long id,@RequestBody Employee employee){
		Employee empObj = employeeService.getEmployeeById(id);
		if(empObj != null) {
			empObj.setName(employee.getName());
			empObj.setRole(employee.getRole());
			return new ResponseEntity<>(employeeService.updateEmployee(id,employee),HttpStatus.OK);
		}
		   return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
	}
	
	//Delete Employee by id
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<HttpStatus> deleteEmployeeById(@PathVariable("id") long id){
		try {
			Employee emp = employeeService.getEmployeeById(id);
			if(emp != null) {
				employeeService.deleteEmployeeById(id);
				return new ResponseEntity<>(HttpStatus.OK);
			}
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//Delete all Employees
	
	@DeleteMapping("/employees")
	public ResponseEntity<HttpStatus> deleteAllEmployees(){
		try {
			employeeService.deleteAllEmployees();
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
