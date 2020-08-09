<%@ page import="java.sql.*,java.util.*,net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException" %>

<%response.setHeader("Access-Control-Allow-Origin","*");

String s1=request.getParameter("hos");
String s2=request.getParameter("privat");
String s3=request.getParameter("general");
String s4=request.getParameter("AC");
String s5=request.getParameter("NonAC");
String s6=request.getParameter("contact");
String s6=request.getParameter("lastupdated");

int a=Integer.parseInt(s2);
int b=Integer.parseInt(s3);
int c=Integer.parseInt(s4);
int d=Integer.parseInt(s5);
Long e=Long.parseLong(s6);

JSONObject JS = new JSONObject();
JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;

Class.forName("com.mysql.jdbc.Driver");

Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");

Statement st=con.createStatement();

int k=st.executeUpdate("update otherhospdisplay set p ="+a+", g ="+b+", ac="+c+", non ="+d+", c="+e+",lastupdated="+f+" where hos='"+s1+"' ");

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