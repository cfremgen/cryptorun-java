package io.cryptorun.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.google.appengine.api.memcache.Expiration;
import com.google.appengine.api.memcache.MemcacheService;
import com.google.appengine.api.memcache.MemcacheServiceFactory;

public class PricesRepository
{
    private static String TOKEN_URL = "https://www.bungie.net/platform/app/oauth/token/";

    private static MemcacheService memCache = MemcacheServiceFactory.getMemcacheService();

    public static long getMembershipIdByAccessToken(String accessToken, Connection conn) throws SQLException
    {
        // Try to load from memory first
        Long membershipId = (Long) memCache.get(accessToken);
        if (membershipId != null)
            return membershipId;

        // Otherwise, load from database then save to memcahe for 10 minutes
        try (PreparedStatement preparedStatement = conn
                .prepareStatement("SELECT membership_id FROM token WHERE access_token = ?"))
        {
            preparedStatement.setString(1, accessToken);

            ResultSet rs = preparedStatement.executeQuery();
            if (rs.next())
                membershipId = rs.getLong(1);

            preparedStatement.close();

            if (membershipId == null)
                return -1;

            memCache.put(accessToken, membershipId, Expiration.byDeltaSeconds(1800));

            return membershipId;
        }
    }

}
