package io.cryptorun.servlet.session;

import java.io.IOException;
import java.sql.Connection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import io.cryptorun.core.DBCore;
import io.cryptorun.model.Session;

@WebServlet(urlPatterns =
{ "/api/session" })
public class SessionManagerServlet extends HttpServlet
{
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException
    {
        String act = request.getParameter("act");
        if (act.equals("IsValidSession"))
        {
            try
            {
                String sessionId = request.getParameter("sessionId");
                Connection conn = DBCore.getDBConnection();

                response.setContentType("text/plain");
                response.getWriter().print(Session.IsValidSession(conn, sessionId));

                conn.close();

            }
            catch (Exception e)
            {
                response.setContentType("text/plain");
                response.getWriter().print(-2);
            }
        }
        else
        {
            response.setContentType("text/plain");
            response.getWriter().print(-1);
        }
    }
/*
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException
    {
        String act = request.getParameter("act");
        if (act.equals("EstablishSession"))
        {
            try
            {
                String username = request.getParameter("username");
                String password = Utils.getSHAString(request.getParameter("password"));

                Connection conn = DBCore.getDBConnection();

                // Attempt to establish user
                User user = new User(conn, username, password);

                // Delete all other sessions associated to the userid
                // Session.DeleteUserSessions(conn, user.id);

                // Generate new sessionid for user and save it
                String sessionId = Session.CreateSession(conn, user.id, request.getRemoteAddr());

                conn.close();

                response.setContentType("text/plain");
                response.getWriter().print(sessionId);

            }
            catch (Exception e)
            {
                response.setContentType("text/plain");
                response.getWriter().print(-2);
            }
        }
        else if (act.equals("KillSession"))
        {
            try
            {
                String sessionId = request.getParameter("sessionId");
                Connection conn = DBCore.getDBConnection();

                // Delete all other sessions associated to the userid
                Session.DeleteSession(conn, sessionId);
                conn.close();

            }
            catch (Exception e)
            {
                response.setContentType("text/plain");
                response.getWriter().print(-3);
            }
        }
        else
        {
            response.setContentType("text/plain");
            response.getWriter().print(-1);
        }
    }
        */
}
