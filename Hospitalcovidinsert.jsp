<%@ page import="java.sql.*,java.util.*,net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException" %>

<%response.setHeader("Access-Control-Allow-Origin","*");%>
<%
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
JSONObject record;

Class.forName("com.mysql.jdbc.Driver");

Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");

Statement st=con.createStatement();

ResultSet rs=null;

int k=st.executeUpdate("insert into hospforcovid19 values('"+s1+"',"+a+","+b+","+c+","+d+",'"+s6+"','"+s7+"')");

rs = st.executeQuery("select * from hospforcovid19 where hospitalname='"+s1+"'");
      try
      {
      while(rs.next()) {
         record = new JSONObject();
         record.put("hospitalname",rs.getString("hospitalname"));
         record.put("totalbeds",rs.getInt("totalbeds"));
         record.put("occupiedbeds",rs.getInt("occupiedbeds"));
         record.put("totalventilators",rs.getInt("totalventilators"));
         record.put("occupiedventilators",rs.getInt("occupiedventilators"));
         record.put("plasmatherapy",rs.getString("plasmatherapy"));
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