<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*,java.util.*" %>

<%response.setHeader("Access-Control-Allow-Origin","*");

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");
Statement st=con.createStatement();
 
String query = "select * from hospforcovid19";
ResultSet rs = st.executeQuery(query);
  
      JSONObject json = new JSONObject();      
      JSONArray address = new JSONArray();
      JSONObject res;
      try
      {
      while(rs.next()) {
         res = new JSONObject();
         res.put("hospitalname",rs.getString("hospitalname"));
         res.put("totalbeds",rs.getInt("totalbeds"));
         res.put("occupiedbeds",rs.getInt("occupiedbeds"));
         res.put("totalventilators",rs.getInt("totalventilators"));
         res.put("occupiedventilators",rs.getInt("occupiedventilators"));
         res.put("plasmatherapy",rs.getString("plasmatherapy"));
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