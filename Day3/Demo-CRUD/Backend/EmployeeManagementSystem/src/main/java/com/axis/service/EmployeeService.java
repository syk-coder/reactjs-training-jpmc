package com.axis.service;

import java.util.List;

import com.axis.model.Employee;

public interface EmployeeService {

	List<Employee> getEmployees();
	Employee getEmployeeById(Long id);
	Employee createEmployee(Employee employee);
	Employee updateEmployee(Long id,Employee employee);
	void deleteEmployeeById(Long id);
	void deleteAllEmployees();
}
