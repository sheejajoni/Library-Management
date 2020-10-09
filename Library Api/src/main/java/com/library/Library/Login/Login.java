package com.library.Library.Login;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;

import com.iThingsFoundation.IThingsFramework.common.Message;

public class Login {
	
	
	@NotBlank(message="UserName is mandatory")
	@Email(message="Enter a valid mailId")
	private String userName;

	@NotBlank(message="UserName is mandatory")
    @Size(min=10, message="password should have 10 characters")
	private String password;
	private Object uuid;
	private int roleId;
	private String roleName;
	private String status;
	private String tokenId;
	private Message message;
	
	
	public Login() {
		super();
	}


	public Login(String userName, String password, Object uuid, int roleId,String roleName, String status, String tokenId,
			Message message) {
		super();
		this.userName = userName;
		this.password = password;
		this.uuid = uuid;
		this.roleId = roleId;
		this.roleName = roleName;
		this.status = status;
		this.tokenId = tokenId;
		this.message = message;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public Object getUuid() {
		return uuid;
	}


	public void setUuid(Object uuid) {
		this.uuid = uuid;
	}


	public int getRoleId() {
		return roleId;
	}

    
	public String getRoleName() {
		return roleName;
	}


	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}


	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getTokenId() {
		return tokenId;
	}


	public void setTokenId(String tokenId) {
		this.tokenId = tokenId;
	}


	public Message getMessage() {
		return message;
	}


	public void setMessage(Message message) {
		this.message = message;
	}

	
		
	
}
