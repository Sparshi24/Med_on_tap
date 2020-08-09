<%@ page import="java.sql.*" %>
<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException" %>

<%response.setHeader("Access-Control-Allow-Origin","*");%>
<%
String s1=request.getParameter("doc_name");
String s2=request.getParameter("specialization");
String s3=request.getParameter("degree");
String s4=request.getParameter("fee");
String s5=request.getParameter("treatment");
String s6=request.getParameter("timming");
String s7=request.getParameter("contact");
String s8=request.getParameter("address");

int f=Integer.parseInt(s4);
Long t=Long.parseLong(s7);

JSONObject JS = new JSONObject();
JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;
address=new JSONObject();

Class.forName("com.mysql.jdbc.Driver");

Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");

Statement st=con.createStatement();

int k=st.executeUpdate("insert into detail values('"+s1+"','"+s2+"','"+s3+"',"+f+",'"+s5+"','"+s6+"',"+t+",'"+s8+"')");

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