package io.cryptorun.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class User
{
    public transient int id;
    public transient String username;
    public transient String password;

    public User(Connection conn, String username, String password) throws Exception
    {
        final String selectSql = "SELECT id FROM users WHERE username = ? AND password = ?";
        PreparedStatement statement = conn.prepareStatement(selectSql);
        statement.setString(1, username);
        statement.setString(2, password);

        ResultSet rs = statement.executeQuery();

        if (rs.next())
        {
            this.id = rs.getInt(1);
            this.username = username;
            this.password = password;
            statement.close();
        }
        else
        {
            statement.close();
            throw new Exception("User not found");
        }
    }

}