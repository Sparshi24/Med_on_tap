<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*,java.util.*" %>

<%
 response.setHeader("Access-Control-Allow-Origin","*");

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");
Statement st=con.createStatement();
 
String query = "select * from detail";
ResultSet rs = st.executeQuery(query);
  
      JSONObject json = new JSONObject();      
      JSONArray array = new JSONArray();
      JSONObject record;
      try
      {
      while(rs.next()) {
         record = new JSONObject();
         record.put("doc_name",rs.getString("doc_name"));
         record.put("specialization",rs.getString("specialization"));
         record.put("degree",rs.getString("degree"));
         record.put("fee",rs.getInt("fee"));
         record.put("treatment",rs.getString("treatment"));
         record.put("timming",rs.getString("timming"));
         record.put("contact",rs.getLong("contact"));
         record.put("address",rs.getString("address"));
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