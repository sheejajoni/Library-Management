package com.library.Library.Book;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.apache.logging.log4j.message.Message;



public class Book {
	
	private Object Book_Id;
	
	private Object Book_Name;
	@NotBlank(message="Name is mandatory")
	private Object ISBN;
	private Object Edition;
	private Object Author_Id;
	private Object Publisher_Id;
	private Object Rack_No;
	private Object Price;
	private Object Created_On;
	
	
	public Book(Object book_Id, Object book_Name, Object iSBN, Object edition, Object author_Id, Object publisher_Id,
			Object rack_No, Object price, Object created_On) {
		super();
		Book_Id = book_Id;
		Book_Name = book_Name;
		ISBN = iSBN;
		Edition = edition;
		Author_Id = author_Id;
		Publisher_Id = publisher_Id;
		Rack_No = rack_No;
		Price = price;
		Created_On = created_On;
	}
	
	
	public Object getBook_Id() {
		return Book_Id;
	}
	public void setBook_Id(Object book_Id) {
		Book_Id = book_Id;
	}
	public Object getBook_Name() {
		return Book_Name;
	}
	public void setBook_Name(Object book_Name) {
		Book_Name = book_Name;
	}
	public Object getISBN() {
		return ISBN;
	}
	public void setISBN(Object iSBN) {
		ISBN = iSBN;
	}
	public Object getEdition() {
		return Edition;
	}
	public void setEdition(Object edition) {
		Edition = edition;
	}
	public Object getAuthor_Id() {
		return Author_Id;
	}
	public void setAuthor_Id(Object author_Id) {
		Author_Id = author_Id;
	}
	public Object getPublisher_Id() {
		return Publisher_Id;
	}
	public void setPublisher_Id(Object publisher_Id) {
		Publisher_Id = publisher_Id;
	}
	public Object getRack_No() {
		return Rack_No;
	}
	public void setRack_No(Object rack_No) {
		Rack_No = rack_No;
	}
	public Object getPrice() {
		return Price;
	}
	public void setPrice(Object price) {
		Price = price;
	}
	public Object getCreated_On() {
		return Created_On;
	}
	public void setCreated_On(Object created_On) {
		Created_On = created_On;
	}
	
	
	
}
