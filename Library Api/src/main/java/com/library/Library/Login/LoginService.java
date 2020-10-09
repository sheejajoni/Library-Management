package com.iThingsFoundation.IThingsFramework.Login;

import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.iThingsFoundation.IThingsFramework.Device.Device;
import com.iThingsFoundation.IThingsFramework.common.Address;
import com.iThingsFoundation.IThingsFramework.common.Message;


@Service
public class LoginService {
	

	@Autowired
    private JdbcTemplate jdbcTemplate;
	
	
	
	public Login loginUser(Login loginDetails,HttpServletRequest request,HttpSession session)
	{
		
		 Login login =new Login();
		 Message msg=new Message();
		 String uid=null;
	
		  
		/* add this at the time of using encrypted passwrd
		 BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String sqlpasswrd = "SELECT password FROM Login WHERE UserName=?";

	    String passwrd = (String) jdbcTemplate.queryForObject(
	            sqlpasswrd, new Object[] { loginDetails.getUserName() }, String.class);
          System.out.println("psswrd--"+passwrd);
          boolean isPasswordMatch = passwordEncoder.matches(loginDetails.getPassword(),passwrd);
          System.out.println(isPasswordMatch);
          
          if(isPasswordMatch)
          {*/
         String sql = "SELECT  UserName,RoleId from Login  where UserName=? and Password=?"; 

		try
		{
		
		
			List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,loginDetails.getUserName(),loginDetails.getPassword());
			/*add this at the time of using encrypted passwrd 
			List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,loginDetails.getUserName(),passwrd);
			*/
			System.out.println(rows.size());
			System.out.println(session.getId());
			if(rows.size()>0)
			{
				@SuppressWarnings("unchecked")
				List<String> msgs = (List<String>) request.getSession().getAttribute("UserNames");
				System.out.println(session.getId());
				if (msgs == null) {
					msgs = new ArrayList<>();
					request.getSession().setAttribute("UserNames", msgs);
				}
				msgs.add(loginDetails.getUserName());
				request.getSession().setAttribute("UserNames", msgs);
				String sessionuser="Update Session set User_Id=? where Access_Token=?";
				int updatepassword=jdbcTemplate.update(sessionuser,loginDetails.getUserName(),session.getId());
				
				
			 for (Map<String, Object> row : rows) 
		        {
		
				login.setUserName((String)row.get("UserName"));
				login.setRoleId((int)row.get("RoleId"));
				 uid=getUId(loginDetails.getUserName(),(int)row.get("RoleId"));
			     login.setUuid(uid); 
				login.setStatus("Success");
				msg.setSuccessMessage("Successfully logged in");
				login.setMessage(msg);
				login.setTokenId(session.getId());
				 
				  
				  
		        }
			
			}
			else
			    {
				login.setStatus("Not Found");
				msg.setErrorMessage("Not Successfully logged in");
				login.setMessage(msg);
							 
				 }
		}
		
		
		catch (Exception e) {
			// TODO: handle exception
			
		}
         /* add this at the time of using encrypted passwrd 
          }
          else
          {
        	  login.setStatus("Not Found");
				msg.setErrorMessage("Not Successfully logged in");
				login.setMessage(msg);
          }*/ 
		return login;
		
		
	}
	
	public LoginDetails getDetails(LoginDetails details)
	{
		LoginDetails getLoginDetails =new LoginDetails();
		
		
		Message msg=new Message();
		String uid=null;
		String mailId=getMailId(details.getUuid(),details.getRoleId());
		if(mailId!=null)
		{
		String sql = "SELECT  * from Login  where User_Id=?"; 
		
		try {
			
			List<Map<String, Object>> rows =  jdbcTemplate.queryForList(sql, mailId);
			
			if(rows.size()>0)
			{
			for (Map<String, Object> row : rows) 
	        {
				uid=getUId(mailId,(int)row.get("RoleId"));
				getLoginDetails.setUuid(uid); 
			  
				getLoginDetails.setName((String)row.get("name"));
				
				getLoginDetails.setPhone((String)row.get("Phone"));
				
				Address address=new Address();
				address=getUuidAddress(uid);
				 // address.setStreet((String)row.get("Street"));
				 // address.setStreetAdditional((String)row.get("StreetAdditional"));
				 // address.setPostalcode((String)row.get("PostalCode"));
				 // address.setCity((String)row.get("City"));
				//  address.setCountry((String)row.get("Country"));
				getLoginDetails.setAddress(address);
				msg.setSuccessMessage("Successfully Found details");
				getLoginDetails.setMessage(msg);
				getLoginDetails.setRoleId((int)row.get("RoleId"));
				getLoginDetails.setStatus("Success");
				
			 
			  
			  
	        }
			}
			else
			{
				msg.setErrorMessage("Not Found details");
				getLoginDetails.setMessage(msg);
				getLoginDetails.setStatus("Error");
			}
			
		}
		catch (Exception e) {
			// TODO: handle exception
		}
		}
		else {
			msg.setErrorMessage("Not Found details");
			getLoginDetails.setMessage(msg);
			getLoginDetails.setStatus("Error");
		}
		
		
		
		return getLoginDetails;
		
	}
	
	public Login loginUser1(Login loginDetails,HttpServletRequest request,HttpSession session)
	{
		
		 Login login =new Login();
		 Message msg=new Message();
		 String uid=null;
	
		  
		/* add this at the time of using encrypted passwrd
		 BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String sqlpasswrd = "SELECT password FROM Login WHERE UserName=?";

	    String passwrd = (String) jdbcTemplate.queryForObject(
	            sqlpasswrd, new Object[] { loginDetails.getUserName() }, String.class);
          System.out.println("psswrd--"+passwrd);
          boolean isPasswordMatch = passwordEncoder.matches(loginDetails.getPassword(),passwrd);
          System.out.println(isPasswordMatch);
          
          if(isPasswordMatch)
          {*/
         String sql = "SELECT  User_Id, Password from Login  where User_Id=? and Password=?"; 

		try
		{
		
		
			List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,loginDetails.getUserName(),loginDetails.getPassword());
			/*add this at the time of using encrypted passwrd 
			List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,loginDetails.getUserName(),passwrd);
			*/
			System.out.println(rows.size());
			System.out.println(session.getId());
			if(rows.size()>0)
			{
				@SuppressWarnings("unchecked")
				List<String> msgs = (List<String>) request.getSession().getAttribute("UserNames");
				System.out.println(session.getId());
				if (msgs == null) {
					msgs = new ArrayList<>();
					request.getSession().setAttribute("UserNames", msgs);
				}
				msgs.add(loginDetails.getUserName());
				request.getSession().setAttribute("UserNames", msgs);
				String sessionuser="Update Session set User_Id=? where Access_token=?";
				int updatepassword=jdbcTemplate.update(sessionuser,loginDetails.getUserName(),session.getId());
				
				
			 for (Map<String, Object> row : rows) 
		        {
		
				login.setUserName((String)row.get("User_Id"));
				login.setRoleId((int)row.get("RoleId"));
				String rolename=getRoleName((int)row.get("RoleId"));
				System.out.println(rolename);
				login.setRoleName(rolename);
				 uid=getUId(loginDetails.getUserName(),(int)row.get("RoleId"));
			     login.setUuid(uid); 
				login.setStatus("Success");
				msg.setSuccessMessage("Successfully logged in");
				login.setMessage(msg);
				login.setTokenId(session.getId());
				 
				  
				  
		        }
			
			}
			else
			    {
				login.setStatus("Not Found");
				msg.setErrorMessage("Not Successfully logged in");
				login.setMessage(msg);
							 
				 }
		}
		
		
		catch (Exception e) {
			// TODO: handle exception
			
		}
         /* add this at the time of using encrypted passwrd 
          }
          else
          {
        	  login.setStatus("Not Found");
				msg.setErrorMessage("Not Successfully logged in");
				login.setMessage(msg);
          }*/ 
		return login;
		
		
	}
	
	
	public Message reset(Login login)
	{
		
		Message msg=new Message();
		/*
		put generatedstring insted of login.getpassword()
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		
		String generatedString  = passwordEncoder.encode(login.getPassword());
		System.out.println(randompassword+"----aaaaa---"+generatedString);
	    */
		
         String sql = "SELECT * from Login  where UserName=?"; 
		
	
			
			List<Map<String, Object>> rows =  jdbcTemplate.queryForList(sql, login.getUserName());
			
			if(rows.size()>0)
			{
		
		
		String loginsql="Update Login set Password=? where UserName=?";
		int updatepassword=jdbcTemplate.update(loginsql,login.getPassword(),login.getUserName());
		if(updatepassword>0)
		{
			msg.setSuccessMessage("Reset Password Successfully");
		}
		else {
			msg.setErrorMessage("Password Reset Failed");
		}
			}
			else {
				msg.setErrorMessage("Username not found");
			}
		
		return msg;
	}
	
	public String getMailId(String uid,int roleId)
	{
		String sql = null;
		String mailid=null;

		
			sql="Select User_Id from Login where UUID=? and RoleId=?";
		
	   // mailid = (String) jdbcTemplate.queryForObject(sql, new Object[] { uid }, String.class);
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,uid,roleId);
		
		if(rows.size()>0)
		{
		for (Map<String, Object> row : rows) 
        {
			mailid=(String)row.get("User_Id");
        }
		}
		else
		{
			mailid=null;
        }
	    return mailid;
	}
	
	
	


}
