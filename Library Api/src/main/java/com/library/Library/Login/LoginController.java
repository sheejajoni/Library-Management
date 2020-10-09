package com.library.Library.Book;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.ServerResponse.Context;

import com.iThingsFoundation.IThingsFramework.Device.Device;
import com.iThingsFoundation.IThingsFramework.Login.LoginService;
import com.iThingsFoundation.IThingsFramework.common.Message;
import com.iThingsFoundation.IThingsFramework.common.SessionService;






@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class LoginController {
	
	@Autowired
	  private LoginService loginService;
	
	@Autowired
	private SessionService sessionService;
	
	
	
	@PostMapping("/login")
	public Login login(@RequestBody @Valid Login loginDatas, HttpServletRequest request,HttpSession session,BindingResult result) {
		
		System.out.println(loginDatas.getUserName());
		return loginService.loginUser(loginDatas,request,session);
		
	}
	@PostMapping("/login1")
	public Login login1(@RequestBody @Valid Login loginDatas, HttpServletRequest request,HttpSession session,BindingResult result) {
		
		System.out.println(loginDatas.getUserName()+"----"+request.getRequestURL()+"---"+request.getLocalAddr()+"---"+request.getLocalName());
		return loginService.loginUser1(loginDatas,request,session);
		
	}
	
	@PostMapping("/getlogindetails")
	public LoginDetails getLoginDetails(@RequestBody @Valid LoginDetails logindetails, HttpServletRequest request) {
		
		
		String sessionid=request.getHeader("Authorization");
		
	    String sessionstatus=sessionService.SessionData(sessionid);
	   
	    LoginDetails getLoginDetails =new LoginDetails();
	    Message msg=new Message();
	      if(sessionstatus!="Session Expired")
	      {
       
		return loginService.getDetails(logindetails);
	      }
	      else
	      {
	    	    msg.setErrorMessage("Session Expired");
				getLoginDetails.setMessage(msg);
	    	  return getLoginDetails;
	      }
		
	}
	
	@PostMapping("/resetpassword")
	public Message resetPassword(@RequestBody @Valid Login datas, HttpServletRequest request)
	{
		String sessionid=request.getHeader("Authorization");
		
	    String sessionstatus=sessionService.SessionData(sessionid);
	    Message msg=new Message();
		
		
		
		if(sessionstatus!="Session Expired")
	    {
	 
			return loginService.reset(datas);
	    }
	    else
	    {
	  	    msg.setErrorMessage("Session Expired");
				
	  	  return msg;
	    }
	}
	

}
