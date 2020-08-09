<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException" %>
<%response.setHeader("Access-Control-Allow-Origin","*");%>
<%

JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;

String id = request.getParameter("userid");
String driver = "com.mysql.jdbc.Driver";
String connectionUrl = "jdbc:mysql://localhost:3306/";
String database = "med_on_tap";
String userid = "root";
String password = "root";
try {
Class.forName(driver);
} catch (ClassNotFoundException e) {
e.printStackTrace();
}
Connection connection = null;
Statement statement = null;
ResultSet rs = null;

try{
connection = DriverManager.getConnection(connectionUrl+database, userid, password);
statement=connection.createStatement();
String sql ="select * from docdetail";
rs = statement.executeQuery(sql);
while(rs.next()){


    address=new JSONObject();
    address.put("specialization",rs.getString("specialization"));
    address.put("degree",rs.getString("degree"));
    address.put("fee",rs.getInt("fee"));
    address.put("treatment",rs.getString("treatment_available"));
    address.put("timming",rs.getInt("timming"));
    address.put("contact",rs.getInt("contact"));
    address.put("address",rs.getString("address"));
    addresses.add(address);
  }
  json.put("response",addresses);
}
catch(JSONException jse)
{
out.println("error");
}
response.setContentType("application.json");
response.getWriter().write(json.toString());

%>