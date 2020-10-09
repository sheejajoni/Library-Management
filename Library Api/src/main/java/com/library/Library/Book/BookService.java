package com.library.Library.Book;


import java.io.FileNotFoundException;
import java.io.PrintStream;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
import java.util.UUID;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.fasterxml.uuid.Generators;
import com.iThingsFoundation.IThingsFramework.Physician.Physician;
import com.iThingsFoundation.IThingsFramework.common.Address;
import com.iThingsFoundation.IThingsFramework.common.Filters;
import com.iThingsFoundation.IThingsFramework.common.Message;

@Service
public class BookService {
	
	@Autowired
    private JdbcTemplate jdbcTemplate;
	UUID uuid;
	Timestamp timestamp = new Timestamp(System.currentTimeMillis());
	
	
	public BookList getBookDetails(String batchsize,String offset,Book book)
	{
		ArrayList<Book> books=new ArrayList<>();
		BookList list=new BookList();
		Filters fil=new Filters() ;
		String remainingRecords=null;
		String lastRowno=null;
		int id=0;
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		dateFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
		String bookId=null;
		
		String lastpart=null;
		
		
       String exist=null;
		
       
	
	public Book register(Book book) throws FileNotFoundException
	{
		uuid= Generators.timeBasedGenerator().generate();
		Book registerbook=new Book();
		Message msg=new Message();
				
		String bookId = null;
		String bookName=null;
		String authorId=null;
		String publisherId=null;
		
		String sql="select * from Book where Book_Id=?";
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,book.getBook_Id());
		if(rows.size()>0)
		{
		
			msg.setErrorMessage("Already registered");
			registerBook.setMessage(msg);
		return registerBook;	
		}
		else
		{
			String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			 String randompassword= RandomStringUtils.random(10,characters);	
							
						
						
			String booksql="Insert into Book(bookId,bookName,authorId,publisherId,Created_On) values (?,?,?,?,?,)";
			int insertbook=jdbcTemplate.update(booksql,uuid.toString(),authorId,publisherId,edition,price,timestamp.getTime());
			
			
			String loginsql="Insert into Login(UserName,Password,UUID,RoleId) values (?,?,?,?)";
			int insertlogin=jdbcTemplate.update(loginsql,patient.getEmail(),randompassword,uuid.toString(),8);
			
			
			if(insertbook>0&&insertlogin>0)
			{
				msg.setSuccessMessage("Registered Successfully ");
				registerBook.setMessage(msg);
				registerBook.setBook_Id(uuid);
			
			}
			
			
			
		return registerBook;
		}
	}
	
	
	public Book update(Book book) throws FileNotFoundException
	{
		uuid= Generators.timeBasedGenerator().generate();
		Book registerbook=new Book();
		Message msg=new Message();
				
		String bookId = null;
		String bookName=null;
		String authorId=null;
		String publisherId=null;
		
		String sql="select * from Book where Book_Id=?";
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,book.getBook_Id());
		if(rows.size()>0)
		{
			
							
			updatesql="Update Book set Book_Id=?,Author_Id=?,Publisher_Id=?,Edition=?,Price=?,Rack=?,Book_Name=?,Created_On=? where Book_Id=?";
		     
		}		
						
		if(insertbook>0&&insertlogin>0)
		{
			msg.setSuccessMessage("Registered Successfully ");
			updateBook.setMessage(msg);
			updateBook.setBook_Id(uuid);
		
		}
		
		
		
	return registerBook;
	}
			
			
			
		return registerBook;
		}
	}


public Book lendBook(Book book) throws FileNotFoundException
{
	uuid= Generators.timeBasedGenerator().generate();
	Book registerbook=new Book();
	Message msg=new Message();
			
	String bookId = null;
	String bookName=null;
	String authorId=null;
	String publisherId=null;
	
	String sql="select * from Book where Book_Id=?";
	List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,book.getBook_Id());
	if(rows.size()>0)
	{
		
						
		insertsql="Insert into ManageBook(bookId,userId,issueDate,, Created_On) values (?,?,?,?,?) where Book_Id Not in ( Select Book_Id from ManageBook where User_Id=?)";
	     
	}		
					
	if(insertbook>0&&insertlogin>0)
	{
		msg.setSuccessMessage("Registered Successfully ");
		updateBook.setMessage(msg);
		updateBook.setBook_Id(uuid);
	
	}
	
	
	
return registerBook;
}
		
		
		
	return registerBook;
	}
}


public Book returnBook(Book book) throws FileNotFoundException
{
	uuid= Generators.timeBasedGenerator().generate();
	Book registerbook=new Book();
	Message msg=new Message();
			
	String bookId = null;
	String bookName=null;
	String authorId=null;
	String publisherId=null;
	
	String sql="select * from Book where Book_Id=?";
	List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,book.getBook_Id());
	if(rows.size()>0)
	{
		
						
		updatesql="Update ManageBook set return_Date=? where Book_Id=?";
	     
	}		
					
	if(updatesql>0)
	{
		msg.setSuccessMessage("Registered Successfully ");
		updateBook.setMessage(msg);
		updateBook.setBook_Id(uuid);
	
	}
	
	
	
return registerBook;
}
		
		
		
	return registerBook;
	}
}
	
	
	
}

