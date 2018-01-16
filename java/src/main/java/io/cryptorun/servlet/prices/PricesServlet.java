package io.cryptorun.servlet.prices;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.binance.api.client.BinanceApiClientFactory;
import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.domain.market.TickerPrice;
import com.google.gson.Gson;

import io.cryptorun.servlet.BaseServlet;

@WebServlet(urlPatterns =
{ "/api/prices" })
public class PricesServlet extends BaseServlet
{
    String binanceToken = System.getProperty("binance-token");
    String binanceSecret = System.getProperty("binance-secret");

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException
    {
        super.doGet(req, resp);
        try
        {
            BinanceApiClientFactory factory = BinanceApiClientFactory.newInstance(binanceToken, binanceSecret);
            BinanceApiRestClient client = factory.newRestClient();

            List<TickerPrice> allPrices = client.getAllPrices();

            resp.getWriter().write(new Gson().toJson(allPrices));

            // Test
            Logger.getLogger("PricesServlet").log(Level.INFO, new Gson().toJson(allPrices));
        }
        catch (Exception e)
        {
            Logger.getLogger("PricesServlet").log(Level.SEVERE, e.getMessage(), e);
            resp.setStatus(HttpURLConnection.HTTP_INTERNAL_ERROR);
        }

    }
}