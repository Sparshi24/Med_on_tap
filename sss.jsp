<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*" %>

<% response.setHeader("Access-Control-Allow-Origin","*");%>

<% 
String s1=request.getParameter("t1");
String s2=request.getParameter("t2");



JSONObject JS = new JSONObject();

JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;
 address = new JSONObject();

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/signup","root","root");
Connection con1=DriverManager.getConnection("jdbc:mysql://localhost:3306/signup","root","root");
Connection con2=DriverManager.getConnection("jdbc:mysql://localhost:3306/signup","root","root");
Statement st=con.createStatement();
Statement st1=con1.createStatement();
Statement st2=con2.createStatement();
ResultSet rs=null;
ResultSet rs1=null;
ResultSet rs2=null;
int k=0,l=0,m=0;
      rs=st.executeQuery("select * from tab1 where ema='"+s1+"' and pass='"+s2+"' and radio='user'");
      rs1=st1.executeQuery("select * from tab1 where ema='"+s1+"' and pass='"+s2+"' and radio='doctor'");
      rs2=st2.executeQuery("select * from tab1 where ema='"+s1+"' and pass='"+s2+"' and radio='hos'");
                if(rs.next())
               {
                k=1;
               }
                else if(rs1.next())
               {
                l=1;
               }
               else if(rs2.next())
               {
                m=1;
               }
if(k!=0){
json.put("response","user");
}
else if(l!=0){
json.put("response","doctor");
}
else if(m!=0){
json.put("response","hospital");
}
else{
json.put("response","no");
}
response.setContentType("application/json");
response.getWriter().write(json.toString());
%>