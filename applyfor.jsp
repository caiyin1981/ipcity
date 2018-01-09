<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="java.sql.*,java.util.*"%>

<%
		request.setCharacterEncoding("utf8");
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String mobile = request.getParameter("mobile");
		String demo = request.getParameter("demo");
		String message = request.getParameter("message");

		//初始化驱动包  
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@61.129.51.62:18888:ghdb", "testuser", "testuser2016");
			if(conn!=null){
				String sql = "insert into gh_applyfor (apply_id,name,email,mobile,demo,message,create_time) values (";
				sql=sql+"to_number(to_char(sysdate,'yyyymmddhh24miss')),";
				sql=sql+"'"+name+"',";
				sql=sql+"'"+email+"',";
				sql=sql+"'"+mobile+"',";
				sql=sql+"'"+demo+"',";
				sql=sql+"'"+message+"',";
				sql=sql+"sysdate)";
				
				System.out.println(sql);
				
				Statement st = (Statement) conn.createStatement(); // 创建用于执行静态sql语句的Statement对象
				int jieguo = st.executeUpdate(sql);
				
				conn.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

%>