<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*,java.util.*" %>

<%response.setHeader("Access-Control-Allow-Origin","*");

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");
Statement st=con.createStatement();
 
String query = "select * from detail";
ResultSet rs = st.executeQuery(query);
  
      JSONObject json = new JSONObject();      
      JSONArray address = new JSONArray();
      JSONObject res;
      try
      {
      while(rs.next()) {
         res = new JSONObject();
         
         res.put("doc_name",rs.getString("doc_name"));
         res.put("specialization",rs.getString("specialization"));
         res.put("degree",rs.getString("degree"));
         res.put("fee",rs.getInt("fee"));
         res.put("treatment",rs.getString("treatment"));
         res.put("timming",rs.getString("timming"));
         res.put("contact",rs.getLong("contact"));
         res.put("address",rs.getString("address"));
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