import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Objects;

@WebServlet("/login")
public class Login extends HttpServlet {

    private Integer key;
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

        //HttpSession session = request.getSession(); //creates new session if none exists
        //session.isNew(); //checks whether is a new session
        //request.getSession(false); //returns null if none exists

        //session.setMaxInactiveInterval(20*60); //seconds
        //session.invalidate(); //immediate

        HttpSession session;
        if(req.getSession(false) != null){
            //for (Cookie cookie : request.getCookies()) {
            //if (cookie.getName().equals("Name")) {
            //String userName = cookie.getValue();
            //}
            //}

        }

        String user = req.getParameter("username");
        String pass = req.getParameter("pwd");
        key = Objects.hash(user, pass);
        if(list.getList().containsKey(key)){
            if(req.getSession(false) == null){
                session = req.getSession();
                session.setMaxInactiveInterval(5*60);
                session.setAttribute("user", user);
                //response.sendRedirect("http://www.cs.mum.edu");// to external link
                //response.sendRedirect("result.jsp"); // within same application
            }
        }
        RequestDispatcher disp = req.getRequestDispatcher("index.jsp");
        disp.forward(req, resp);
    }
}
