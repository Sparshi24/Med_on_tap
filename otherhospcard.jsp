<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*,java.util.*" %>

<%
 response.setHeader("Access-Control-Allow-Origin","*");

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");
Statement st=con.createStatement();
 
String query = "select * from otherhospdisplay";
ResultSet rs = st.executeQuery(query);
  
      JSONObject json = new JSONObject();      
      JSONArray array = new JSONArray();
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
         array.add(record);
      }
      json.put("responses", array);
     }
catch(JSONException jse)
{
 
}
response.setContentType("application.json");
response.getWriter().write(json.toString());      
%>