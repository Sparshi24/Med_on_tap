<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*" %>

<% response.setHeader("Access-Control-Allow-Origin","*");%>

<% 
String s1=request.getParameter("name");
String s2=request.getParameter("email");
String s3=request.getParameter("phone");
String s4=request.getParameter("age");
String s5=request.getParameter("disease");
String s6=request.getParameter("radio1");
Long a=Long.parseLong(s3);
int b=Integer.parseInt(s4);

JSONObject JS = new JSONObject();

JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;
 address = new JSONObject();

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");
Statement st=con.createStatement();

int k=st.executeUpdate("update user set name='"+s1+"', email='"+s2+"', phone="+a+", age ="+b+", disease='"+s5+"',gender='"+s6+"' where name='"+s1+"' ");
if(k!=0){
json.put("response","yes");
}
else{
json.put("response","no");
}
response.setContentType("application/json");
response.getWriter().write(json.toString());
%>