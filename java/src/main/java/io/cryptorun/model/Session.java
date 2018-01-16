package io.cryptorun.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

public class Session
{
    public transient int id;
    public transient int userid;
    public transient String ip;
    public transient Timestamp createdate;

    public static void DeleteUserSessions(Connection conn, int userId) throws SQLException
    {
        final String sSql = "DELETE FROM session WHERE userid = ?";

        PreparedStatement statement = conn.prepareStatement(sSql);
        statement.setInt(1, userId);
        statement.executeUpdate();
        statement.close();
    }

    public static void DeleteSession(Connection conn, String sessionId) throws SQLException
    {
        final String sSql = "DELETE FROM session WHERE id = ?";

        PreparedStatement statement = conn.prepareStatement(sSql);
        statement.setString(1, sessionId);
        statement.executeUpdate();
        statement.close();
    }

    public static String CreateSession(Connection conn, int userId, String userIP) throws SQLException
    {
        String sessionId = java.util.UUID.randomUUID().toString();

        String sSql = "INSERT INTO session(id, userid, ip) VALUES(?, ?, ?)";

        PreparedStatement statement = conn.prepareStatement(sSql);
        statement.setString(1, sessionId);
        statement.setInt(2, userId);
        statement.setString(3, userIP);
        statement.executeUpdate();
        statement.close();

        return sessionId;
    }

    public static boolean IsValidSession(Connection conn, String sessionId) throws SQLException
    {
        String sSql = "SELECT id FROM session WHERE id = ? ";

        PreparedStatement statement = conn.prepareStatement(sSql);
        statement.setString(1, sessionId);

        ResultSet rs = statement.executeQuery();
        boolean isValidSession = false;
        if (rs.next())
            isValidSession = true;

        statement.close();

        return isValidSession;
    }

    public static int GetUserId(Connection conn, String sessionId) throws Exception
    {
        String sSql = "SELECT userid FROM session WHERE id = ? ";

        PreparedStatement statement = conn.prepareStatement(sSql);
        statement.setString(1, sessionId);

        ResultSet rs = statement.executeQuery();

        int userId;
        if (rs.next())
        {
            userId = rs.getInt(1);
            statement.close();
        }
        else
        {
            statement.close();
            throw new Exception("User not found");
        }
        return userId;
    }

}