<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*,java.util.*" %>

<%response.setHeader("Access-Control-Allow-Origin","*");

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");
Statement st=con.createStatement();
 
String query = "select * from otherhospdisplay";
ResultSet rs = st.executeQuery(query);
  
      JSONObject json = new JSONObject();      
      JSONArray address = new JSONArray();
      JSONObject res;
      try
      {
      while(rs.next()) {
         res = new JSONObject();
         res.put("hos",rs.getString("hos"));
         res.put("p",rs.getInt("p"));
         res.put("g",rs.getInt("g"));
         res.put("ac",rs.getInt("ac"));
         res.put("non",rs.getInt("non"));
         res.put("tr",rs.getString("tr"));
         res.put("c",rs.getLong("c"));
         res.put("ad",rs.getString("ad"));
         res.put("lastupdated",rs.getString("lastupdated"));
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