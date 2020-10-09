package com.library.Library.Common;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;


@Service
public class SessionService {
	
	@Autowired
    private JdbcTemplate jdbcTemplate;
	
	public String SessionData(String sessionid)
	{
		long lastaccesstime=0;
		int interval=0;
		long expiry=0;
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		String sql = "SELECT  * from Session  where Id=?"; 
		String statement=null;
		System.out.println(sql);
		try {
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,sessionid);
		
		if(rows.size()>0)
		{
			for (Map<String, Object> row : rows) 
	        {
	
			lastaccesstime=(long)row.get("Last_Access");
			interval=(int)row.get("Valid");	
			
				  
	        }
			
			
			if((timestamp.getTime()-lastaccesstime)>(interval*1000))
			{
				
				statement="Session Expired";
			}
			else
			{
				long exp=timestamp.getTime()+(interval*1000);
				String sqlupdate="Update Session set Last_Access=?,Valid=? where Id=?";
				int update=jdbcTemplate.update(sqlupdate,timestamp.getTime(),exp,sessionid);
				if(update>0)
				{
					statement= "Session Updated";
				}
				
				
			}
				
			
			
		}
		else {
			statement= "Session Expired";
		}
		}catch (Exception e) {
			// TODO: handle exception
			statement= "Session Expired";
		}
		
		
		return statement;
	}
	
	public String SessionData1(String sessionid,String uid)
	{
		long lastaccesstime=0;
		int interval=0;
		long expiry=0;
		String username=getUserName(uid);
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		String sql = "SELECT  * from Session  where Id=? and User_Id=?"; 
		String statement=null;
		System.out.println(sql);
		try {
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql,sessionid,username);
		
		if(rows.size()>0)
		{
			for (Map<String, Object> row : rows) 
	        {
	
			lastaccesstime=(long)row.get("Last_Access");
			interval=(int)row.get("Valid");	
				
				  
	        }
			
			
			if((timestamp.getTime()-lastaccesstime)>(interval*1000))
			{
				
				statement="Session Expired";
			}
			else
			{
				long exp=timestamp.getTime()+(interval*1000);
				String sqlupdate="Update Session set Last_Access=?,Valid=? where Id=?";
				int update=jdbcTemplate.update(sqlupdate,timestamp.getTime(),exp,sessionid);
				if(update>0)
				{
					statement= "Session Updated";
				}
				
				
			}
				
			
			
		}
		else {
			statement= "Session Expired";
		}
		}catch (Exception e) {
			// TODO: handle exception
			statement= "Session Expired";
		}
		
		
		return statement;
	}
	
	public String getUserName(String id)
	{
		
		String sql = "SELECT User_Id FROM Login WHERE Id=?";
		String uname = (String) jdbcTemplate.queryForObject(
	            sql, new Object[] { id }, String.class);

	  

	    return uname;
		
	}

}

