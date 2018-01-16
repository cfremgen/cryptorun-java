package io.cryptorun.core;

import java.security.MessageDigest;
import java.util.Formatter;

public class Utils
{

    public static String SALT = "cryptorunner";

    public static String getSHAString(String password)
    {
        try
        {
            MessageDigest md = MessageDigest.getInstance("SHA-1");
            md.update((SALT + password).getBytes("UTF-8"));

            Formatter formatter = new Formatter();
            for (byte b : md.digest())
                formatter.format("%02x", b);

            String result = formatter.toString().toUpperCase();
            formatter.close();
            return result;
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return "";
    }
}
