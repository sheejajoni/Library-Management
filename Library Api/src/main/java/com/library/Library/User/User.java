package com.library.Library.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class User {
	
	private Object User_Id;
	private Object User_Name;
	@NotBlank(message="Name is mandatory")
	
	private Object Phone;
	
	private Object Role_Id;
	
	private Object Address;
	private Object Created_On;
	
	public Object getUser_Id() {
		return User_Id;
	}

	public void setUser_Id(Object user_Id) {
		User_Id = user_Id;
	}

	public Object getUser_Name() {
		return User_Name;
	}

	public void setUser_Name(Object user_Name) {
		User_Name = user_Name;
	}

	public Object getPhone() {
		return Phone;
	}

	public void setPhone(Object phone) {
		Phone = phone;
	}

	public Object getRole_Id() {
		return Role_Id;
	}

	public void setRole_Id(Object role_Id) {
		Role_Id = role_Id;
	}

	public Object getAddress() {
		return Address;
	}

	public void setAddress(Object address) {
		Address = address;
	}

	public Object getCreated_On() {
		return Created_On;
	}

	public void setCreated_On(Object created_On) {
		Created_On = created_On;
	}

		
	public User(Object user_Id, Object user_Name, Object phone, Object role_Id, Object address, Object created_On) {
		super();
		User_Id = user_Id;
		User_Name = user_Name;
		Phone = phone;
		Role_Id = role_Id;
		Address = address;
		Created_On = created_On;
	}
	

}
