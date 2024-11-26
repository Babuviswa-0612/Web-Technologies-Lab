import java.io.*;
import java.sql.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class FeedbackServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("name");
        String feedback = request.getParameter("feedback");

        String url = "jdbc:mysql://localhost:3306/photography";
        String user = "root";
        String password = "password";

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            String query = "INSERT INTO feedback (name, feedback) VALUES (?, ?)";
            PreparedStatement stmt = conn.prepareStatement(query);

            stmt.setString(1, name);
            stmt.setString(2, feedback);

            stmt.executeUpdate();

            out.println("<html><body>");
            out.println("<h1>Thank you for your feedback, " + name + "!</h1>");
            out.println("</body></html>");

            stmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
            out.println("Error storing feedback.");
        }
    }
}
