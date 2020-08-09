<%@ page import="java.sql.*,java.util.*" %>
<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException" %>

<%response.setHeader("Access-Control-Allow-Origin","*");%>
<%
String s1=request.getParameter("t1");
String s2=request.getParameter("t2");
String s3=request.getParameter("t3");
int a=Integer.parseInt(s2);
int s=Integer.parseInt(s3);

JSONObject JS = new JSONObject();
JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;
address=new JSONObject();

Class.forName("com.mysql.jdbc.Driver");

Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sparshi","root","root");

Statement st=con.createStatement();

int k=st.executeUpdate("insert into vv values('"+s1+"',"+a+","+s+")");

if(k!=0)
{
  json.put("response","Yes");
}

else
{
  json.put("response","Not");
}
response.setContentType("application/json");
response.getWriter().write(json.toString());


%>