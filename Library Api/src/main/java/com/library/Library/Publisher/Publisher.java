package com.library.Library.Publisher;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class Publisher {
	
	private Object Pub_Id;
	
	private Object Author_Id;
	
	private Object Book_Id;
	
	private Object Pub_Name;
	@NotBlank(message="Name is mandatory")
	
	private Object Address;
	private Object Created_On;
	
	public Object getPub_Id() {
		return Pub_Id;
	}
	public void setPub_Id(Object pub_Id) {
		Pub_Id = pub_Id;
	}
	public Object getAuthor_Id() {
		return Author_Id;
	}
	public void setAuthor_Id(Object author_Id) {
		Author_Id = author_Id;
	}
	public Object getBook_Id() {
		return Book_Id;
	}
	public void setBook_Id(Object book_Id) {
		Book_Id = book_Id;
	}
	public Object getPub_Name() {
		return Pub_Name;
	}
	public void setPub_Name(Object pub_Name) {
		Pub_Name = pub_Name;
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
	
	public Publisher(Object pub_Id, Object author_Id, Object book_Id, Object pub_Name, Object address,
			Object created_On) {
		super();
		Pub_Id = pub_Id;
		Author_Id = author_Id;
		Book_Id = book_Id;
		Pub_Name = pub_Name;
		Address = address;
		Created_On = created_On;
	}

}
