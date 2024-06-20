package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.model.Employee;
import com.axis.repo.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;
	
	@Override
	public List<Employee> getEmployees() {
		// TODO Auto-generated method stub
		return employeeRepository.findAll();
	}

	@Override
	public Employee getEmployeeById(Long id) {
		Optional<Employee> empObj = employeeRepository.findById(id);
		
		if(empObj.isPresent()) {
			return empObj.get();
		}
		return null;
	}

	@Override
	public Employee createEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepository.save(employee);
	}

	@Override
	public Employee updateEmployee(Long id, Employee employee) {
		Employee empObj = getEmployeeById(id);
		if(empObj != null) {
			empObj.setName(employee.getName());
			empObj.setRole(employee.getRole());
		}
		return employeeRepository.save(empObj);
	}

	@Override
	public void deleteEmployeeById(Long id) {
		Employee empObj = getEmployeeById(id);
		if(empObj != null)
			employeeRepository.deleteById(id);

	}

	@Override
	public void deleteAllEmployees() {
		employeeRepository.deleteAll();

	}

}
