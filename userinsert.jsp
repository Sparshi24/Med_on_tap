<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*,java.util.*" %>

<%response.setHeader("Access-Control-Allow-Origin","*");

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");
Statement st=con.createStatement();
 
String query = "select * from user";
ResultSet rs = st.executeQuery(query);
  
      JSONObject json = new JSONObject();      
      JSONArray address = new JSONArray();
      JSONObject res;
      try
      {
      while(rs.next()) {
         res = new JSONObject();
         
         res.put("name",rs.getString("name"));
         res.put("email",rs.getString("email"));
         res.put("phone",rs.getString("phone"));
         res.put("age",rs.getInt("age"));
         res.put("disease",rs.getString("disease"));
         res.put("gender",rs.getString("gender"));
         address.add(res);
      }
      json.put("responses", address);
     }
catch(JSONException jse)
{
 
}
response.setContentType("application.json");
response.getWriter().write(json.toString());      
%>