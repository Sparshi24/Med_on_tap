<%@ page import="java.sql.*,java.util.*,net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException" %>

<%response.setHeader("Access-Control-Allow-Origin","*");

String s1=request.getParameter("hospitalname");
String s2=request.getParameter("totalbeds");
String s3=request.getParameter("occupiedbeds");
String s4=request.getParameter("totalventilators");
String s5=request.getParameter("occupiedventilators");
String s6=request.getParameter("plasmatherapy");
String s7=request.getParameter("lastupdated");

int a=Integer.parseInt(s2);
int b=Integer.parseInt(s3);
int c=Integer.parseInt(s4);
int d=Integer.parseInt(s5);


JSONObject JS = new JSONObject();
JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;

Class.forName("com.mysql.jdbc.Driver");

Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");

Statement st=con.createStatement();

int k=st.executeUpdate("update hospforcovid19 set hospitalname='"+s1+"', totalbeds ="+a+", occupiedbeds="+b+", totalventilators ="+c+", occupiedventilators="+d+",plasmatherapy='"+s6+"',lastupdated='"+s7+"' where hospitalname='"+s1+"' ");

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