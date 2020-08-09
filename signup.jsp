<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*" %>

<% response.setHeader("Access-Control-Allow-Origin","*");%>

<% 
String s1=request.getParameter("name");
String s2=request.getParameter("ema");
String s3=request.getParameter("pass");

String s4=request.getParameter("radio");
String s5=request.getParameter("radio1");


JSONObject JS = new JSONObject();

JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;
 address = new JSONObject();

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");
Statement st=con.createStatement();

int k=st.executeUpdate("insert into signup values('"+s1+"','"+s2+"','"+s3+"','"+s4+"','"+s5+"')");
if(k!=0){
json.put("response","yes");
}
else{
json.put("response","no");
}
response.setContentType("application/json");
response.getWriter().write(json.toString());
%>