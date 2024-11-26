import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class TechniquesServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        String technique = request.getParameter("technique");

        out.println("<html><body>");
        out.println("<h1>Thank You, " + name + "!</h1>");
        out.println("<p>Your favorite technique is: " + technique + "</p>");
        out.println("</body></html>");
    }
}
