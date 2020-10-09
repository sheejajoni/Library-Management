package com.library.Library.Book;

import java.util.ArrayList;

public class BookList {
	private String nextoffset;
	private String remainingRecords;
	private ArrayList<Book> book;
    private String status;
    
	public BookList() {
		super();
	}

	public BookList(String nextoffset, String remainingRecords, ArrayList<Book> book, String status) {
		super();
		this.nextoffset = nextoffset;
		this.remainingRecords = remainingRecords;
		this.book = book;
		this.status = status;
	}

	public String getNextoffset() {
		return nextoffset;
	}

	public void setNextoffset(String nextoffset) {
		this.nextoffset = nextoffset;
	}

	public String getRemainingRecords() {
		return remainingRecords;
	}

	public void setRemainingRecords(String remainingRecords) {
		this.remainingRecords = remainingRecords;
	}

	public ArrayList<Book> getBooks() {
		return book;
	}

	public void setBook(ArrayList<Book> book) {
		this.book = book;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

    
    
}

