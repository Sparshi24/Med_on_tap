<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*,java.util.*" %>

<%
 response.setHeader("Access-Control-Allow-Origin","*");
String s1=request.getParameter("t1"); 

Class.forName("com.mysql.jdbc.Driver");

Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/med_on_tap","root","root");
Statement st=con.createStatement();
String query ="select * from  hospforcovid19 where hospitalname like '%"+s1+"%' or convert(totalbeds, char) like '%"+s1+"%' or convert(occupiedbeds, char) like '%"+s1+"%' or convert(totalventilators, char) like '%"+s1+"%' or convert(occupiedventilators, char) like '%"+s1+"%' or convert(plasmatherapy ,char) like '%"+s1+"%' or convert(lastupdated ,char) like '%"+s1+"%' or ad like '%"+s1+"%'";
ResultSet rs = st.executeQuery(query);


JSONObject json = new JSONObject();      
      JSONArray array = new JSONArray();
      JSONObject record;
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