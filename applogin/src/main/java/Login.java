import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/login")
public class Login extends HttpServlet {

    private String user;
    private String pass;
    private UserList list = new UserList();

    @Override
    public void init(ServletConfig config) throws ServletException {

        for(int i = 1; i < 10; i++){
            list.addUser(new User("User_" + i, "123"));
        }
        list.addUser(new User("Diego", "123"));
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        user = (String)req.getAttribute("name");
        pass = (String)req.getAttribute("pwd");


        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<p>" + (list.getList()).containsValue(user) + "</p>");
        out.print("</body></html>");
    }
}
