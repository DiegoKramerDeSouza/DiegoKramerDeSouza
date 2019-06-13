import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter("/*")
public class AuthFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) servletRequest;
        HttpServletResponse res = (HttpServletResponse) servletResponse;
        HttpSession session = req.getSession(false);
        String loginURI = req.getContextPath() + "/login";

        boolean isLogged = session != null && session.getAttribute("user") != null;
        boolean isLoginRequest = req.getRequestURI().equals(loginURI) || req.getRequestURI().equals("/");
        System.out.println(isLogged);
        if(isLogged || isLoginRequest){
            filterChain.doFilter(req, res);
        } else {
            res.sendRedirect("/");
        }

    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException { }

    @Override
    public void destroy() { }
}
