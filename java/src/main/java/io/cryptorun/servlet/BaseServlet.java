package io.cryptorun.servlet;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BaseServlet extends HttpServlet
{
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException
    {
        resp.setContentType("application/json");
    }

    public void doPost(HttpServletRequest req, HttpServletResponse resp)
    {
    }

    public void doPut(HttpServletRequest req, HttpServletResponse resp)
    {
    }

    public void doDelete(HttpServletRequest req, HttpServletResponse resp)
    {
    }

}
