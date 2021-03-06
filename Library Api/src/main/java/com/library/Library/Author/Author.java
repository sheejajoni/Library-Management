package com.library.Library.Author;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class Author {
	
	
	private Object Author_Id;
	
	private Object Book_Id;
	
	private Object Author_Name;
	@NotBlank(message="Name is mandatory")
	
	private Object Address;
	private Object Created_On;
	
	
	public Author(Object author_Id, Object book_Id, Object author_Name, Object address, Object created_On) {
		super();
		Author_Id = author_Id;
		Book_Id = book_Id;
		Author_Name = author_Name;
		Address = address;
		Created_On = created_On;
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
	public Object getAuthor_Name() {
		return Author_Name;
	}
	public void setAuthor_Name(Object author_Name) {
		Author_Name = author_Name;
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


}
