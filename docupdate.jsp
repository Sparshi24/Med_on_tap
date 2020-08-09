<%@ page import="java.sql.*,java.util.*,net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException" %>

<%response.setHeader("Access-Control-Allow-Origin","*");

String s1=request.getParameter("doc_name");
String s2=request.getParameter("specialization");
String s3=request.getParameter("degree");
String s4=request.getParameter("fee");
String s5=request.getParameter("treatment");
String s6=request.getParameter("timming");
String s7=request.getParameter("contact");
String s8=request.getParameter("address");

int c=Integer.parseInt(s4);
Long d=Long.parseLong(s7);


JSONObject JS = new JSONObject();
JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;

Class.forName("com.mysql.jdbc.Driver");

Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");

Statement st=con.createStatement();

int k=st.executeUpdate("update detail set doc_name='"+s1+"', specialization='"+s2+"',degree='"+s3+"',fee="+c+", treatment='"+s5+"',timming='"+s6+"',contact="+d+",address='"+s8+"' where doc_name='"+s1+"' ");

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