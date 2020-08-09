<%@ page import="java.sql.*,java.util.*,net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException" %>

<%response.setHeader("Access-Control-Allow-Origin","*");%>
<%
//String s1=request.getParameter("hos");
//String s2=request.getParameter("p");
//String s3=request.getParameter("g");
//String s4=request.getParameter("AC");
//String s5=request.getParameter("NonAC");
//String s6=request.getParameter("tr");
//String s7=request.getParameter("c");
//String s8=request.getParameter("ad");
//String s9=request.getParameter("lastupdated");
//int a=Integer.parseInt(s2);
//int b=Integer.parseInt(s3);
//int c=Integer.parseInt(s4);
//int d=Integer.parseInt(s5);
//Long e=Long.parseLong(s7);

JSONObject JS = new JSONObject();
JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject record;

Class.forName("com.mysql.jdbc.Driver");

Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");

Statement st=con.createStatement();
ResultSet rs=null;

int k=st.executeUpdate("insert into otherhospdisplay values('"+s1+"',"+a+","+b+","+c+","+d+",'"+s6+"',"+e+",'"+s8+"','"+s9+"')");
rs = st.executeQuery("select * from tab where hos='"+s1+"'");

try
      {
      while(rs.next()) {
         record = new JSONObject();
         record.put("hos",rs.getString("hos"));
         record.put("p",rs.getInt("p"));
         record.put("g",rs.getInt("g"));
         record.put("ac",rs.getInt("ac"));
         record.put("non",rs.getInt("non"));
         record.put("tr",rs.getString("tr"));
         record.put("c",rs.getLong("c"));
         record.put("ad",rs.getString("ad"));
         record.put("lastupdated",rs.getString("lastupdated"));
         addresses.add(record);
      }
      json.put("responses", addresses);
     }
catch(JSONException jse)
{
 
}

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

<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*,java.util.*" %>

<%response.setHeader("Access-Control-Allow-Origin","*");

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");
Statement st=con.createStatement();
 
String query = "select * from otherhospdisplay";
ResultSet rs = st.executeQuery(query);
  
      JSONObject json = new JSONObject();      
      JSONArray address = new JSONArray();
      JSONObject record;
      try
      {
      while(rs.next()) {
         record = new JSONObject();
         record.put("hos",rs.getString("hos"));
         record.put("p",rs.getInt("p"));
         record.put("g",rs.getInt("g"));
         record.put("ac",rs.getInt("ac"));
         record.put("non",rs.getInt("non"));
         record.put("tr",rs.getString("tr"));
         record.put("c",rs.getLong("c"));
         record.put("ad",rs.getString("ad"));
         record.put("lastupdated",rs.getString("lastupdated"));
         address.add(record);
      }
      json.put("responses", address);
     }
catch(JSONException jse)
{
 
}
response.setContentType("application.json");
response.getWriter().write(json.toString());      
%>