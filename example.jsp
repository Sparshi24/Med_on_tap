<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*,java.util.*" %>
<%
response.setHeader("Access-Control-Allow-Origin","*");
Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sparshi","root","root");
Statement st=con.createStatement();
 String s1=request.getParameter("u");
String query = "Select * from driver where u='"+s1+"'";
ResultSet rs = st.executeQuery(query);
  
      JSONObject json = new JSONObject();      
      JSONArray array = new JSONArray();
      JSONObject record;
      try
      {
      while(rs.next()) {
         record = new JSONObject();
	 record.put("u",rs.getString("u"));
         record.put("password",rs.getString("pw"));
         record.put("role",rs.getString("c"));         
	 //record.put("n",rs.getString("name"));
         record.put("c",rs.getString("contact"));
        // record.put("e",rs.getString("email"));
        // record.put("a",rs.getString("aadhar"));
        // record.put("l",rs.getString("license"));
         //record.put("exp",rs.getString("exp"));
         
         array.add(record);
      }
      json.put("Driver_data", array);
     }
catch(JSONException jse)
{
 
}
response.setContentType("application.json");
response.getWriter().write(json.toString());      


        // FileWriter file = new FileWriter("E:/output.json");
         //file.write(jsonObject.toJSONString());
         //file.close();
%>
      